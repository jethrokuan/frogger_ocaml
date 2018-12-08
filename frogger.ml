open Base
open Scaffold

module Direction = struct
  type t =
    | Up
    | Down
    | Left
    | Right
end

module Frog = struct
  type t =
    { position : Position.t
    ; facing: Direction.t
    } [@@deriving fields]

  let create = Fields.create
end

module Non_frog_character = struct
  module Kind = struct
    type t =
      | Car
      | Log
  end

  type t =
    { position: Position.t
    ; kind: Kind.t
    ; image: Image.t
    ; horizontal_speed: int
    } [@@deriving fields]

  let create = Fields.create
end

module Game_state = struct
  type t =
    | Playing
    | Won
    | Dead
end

module World = struct
  type t =
    { frog  : Frog.t
    ; nfcs: Non_frog_character.t list
    ; state: Game_state.t
    } [@@deriving fields]

  let create = Fields.create
end

let create () =
  let frog =
    let position = Position.create ~x:(Scaffold.Board.num_cols / 2) ~y:0 in
    Frog.create ~position ~facing:Direction.Up in
  let nfcs =
    List.mapi
      Scaffold.Board.rows
      ~f:(fun idx row ->
          let make_nfc kind col =
            let horizontal_speed =
              let sign = 2 * (Random.int 1) - 1 in
              sign * (1 + Random.int 3) in
            let position = Position.create ~x:col ~y:idx in
            let image =
              if horizontal_speed < 0
              then Image.car1_left
              else Image.car1_right
            in
            Non_frog_character.create ~kind ~horizontal_speed ~position ~image
          in
          let make_nfcs kind =
            [make_nfc kind 0]
          in match row with
          | Safe_strip -> []
          | Road -> make_nfcs Non_frog_character.Kind.Car
          | River -> make_nfcs Non_frog_character.Kind.Log
        )
    |> List.concat
  in
  World.create ~frog ~nfcs ~state:(Game_state.Playing)
;;

let rec check_collisions (pos: Position.t) (nfcs : Non_frog_character.t list) =
  match nfcs with
  | [] -> None
  | hd :: tl -> let is_collision (nfc: Non_frog_character.t) =
                  if Int.(<>) pos.y nfc.position.y (* Not the same row *)
                  then false
                  else Int.(=) nfc.position.x pos.x
    in
    if is_collision hd then Some hd else check_collisions pos tl

let update_game_state (world: World.t) =
  let new_game_state =
    match world.state with
    | Game_state.Won -> Game_state.Won
    | Game_state.Dead -> Game_state.Dead
    | Game_state.Playing ->
      let collision = check_collisions world.frog.position world.nfcs in
      match collision with
      | None -> if world.frog.position.y = (List.length Scaffold.Board.rows) -1 then Game_state.Won else Game_state.Playing
      | Some _ -> Game_state.Dead
  in
  {world with state = new_game_state}

let tick (world : World.t) =
  match world.state with
  | Dead | Won -> world
  | Playing ->
    let update_nfc (nfc: Non_frog_character.t) =
      let new_position =
        let x = (nfc.position.x + nfc.horizontal_speed) % Scaffold.Board.num_cols in
        Position.create ~x ~y:nfc.position.y
      in
      {nfc with position = new_position}
    in
    let new_nfcs = List.map ~f:update_nfc world.nfcs in
    let world_pre_check = {world with nfcs = new_nfcs} in
    update_game_state world_pre_check
;;

let clamp ~v ~min ~max =
  if v < min then min else if v > max then max else v

let handle_input (world : World.t) (key : Key.t) =
  match world.state with
  | Game_state.Won | Game_state.Dead -> world
  | Game_state.Playing ->
    let max_y = List.length Scaffold.Board.rows - 1 in
    let max_x = Scaffold.Board.num_cols - 1 in
    let new_frog =
      let new_pos, new_dir =
        let old_pos = world.frog.position in
        match key with
        | Key.Arrow_up -> {old_pos with y = clamp ~v:(old_pos.y + 1) ~min:0 ~max:max_y}, Direction.Up
        | Key.Arrow_down -> {old_pos with y = clamp ~v:(old_pos.y - 1) ~min:0 ~max:max_y}, Direction.Down
        | Key.Arrow_left -> {old_pos with x = clamp ~v:(old_pos.x - 1) ~min:0 ~max:max_x}, Direction.Left
        | Key.Arrow_right -> {old_pos with x = clamp ~v:(old_pos.x + 1) ~min:0 ~max:max_x}, Direction.Right
      in
      Frog.create ~position:new_pos ~facing:new_dir
    in
    let world_pre_check = World.create ~frog:new_frog ~state:Game_state.Playing ~nfcs:world.nfcs in
    update_game_state world_pre_check

let draw (world : World.t) =
  let draw_frog =
    let image =
      match world.state with
      | Won -> Image.confetti
      | Playing -> (
        match world.frog.facing with
        | Up -> Image.frog_up
        | Down -> Image.frog_down
        | Left -> Image.frog_left
        | Right -> Image.frog_right
        )
      | Dead -> Image.skull_and_crossbones
    in
    (image, world.frog.position)
  in
  let draw_nfc (nfc: Non_frog_character.t) = (nfc.image, nfc.position) in
  (List.map ~f:draw_nfc world.nfcs) @ [draw_frog]
;;

let handle_event world (event : Event.t) =
  match event with
  | Event.Tick -> tick world
  | Event.Keypress key -> handle_input world key
;;

let finished (world: World.t) =
  match world.state with
  | Won -> true
  | Playing | Dead -> false
;;
