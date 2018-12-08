(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_new_string(""),
     cst_expect_test_collector=caml_new_string("expect_test_collector"),
     ocaml_lex_tables=
      [0,
       caml_new_string
        ("\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\0\0\x01\0\xff\xff\x02\0\0\0\0\0\x01\0\0\0\x02\0\x01\0\x03\0\0\0\x03\0\x03\0\0\0\x01\0\t\0\x05\0\x02\0\x04\0\x11\0\f\0\x0e\0\x04\0\x11\0\x12\0\x1a\0\x1c\0\x05\0\x1b\0\x10\0\x14\0\x17\0\x06\0U\0\xfd\xff\xfe\xff\x01\0.\0/\0(\0\x1f\0.\x000\0\x07\0O\0\x1c\0>\0\b\0\xff\xff\t\0C\0C\0g\0d\0i\0_\0k\0_\0q\0\n\0h\0h\0t\0h\0z\0h\0t\0o\0q\0\x0b\0t\0u\0}\0\x7f\0\f\0~\0s\0w\0z\0\r\0"),
       caml_new_string
        ("\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
       caml_new_string
        ("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff/\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
       caml_new_string
        ("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\f\0\x0e\0\x18\0\f\0'\0\f\x007\0;\0=\0G\0;\0V\0;\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\x000\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\x001\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\"\0\x03\0\x1d\0\x07\0\x06\0\n\0\t\0\x17\0\x04\0\x11\0\x13\0\x15\0\x12\0\x1b\0\x19\0\x0f\0\x1a\0\x10\0\x05\0\x0b\0\x14\0\x16\0\x1c\0\x1e\0\r\0\x1f\0 \0!\0#\0$\0%\0&\0(\0)\0*\0+\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0Q\x002\x003\x004\x005\x006\0<\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\x009\x008\0:\0>\0.\0?\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0.\0@\0A\0B\0C\0D\0E\0F\0H\0I\0J\0K\0L\0M\0N\0O\0P\0R\0S\0T\0U\0W\0X\0Y\0Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0-\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),
       caml_new_string
        ("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\x0b\0\r\0\x17\0!\0&\0+\x006\0:\0<\0F\0P\0U\0Z\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x02\0\x1c\0\x06\0\x05\0\b\0\b\0\x16\0\x03\0\x10\0\x12\0\x14\0\x11\0\x1a\0\x18\0\x0e\0\x19\0\x0f\0\x04\0\n\0\x13\0\x15\0\x1b\0\x1d\0\t\0\x1e\0\x1f\0 \0\"\0#\0$\0%\0'\0(\0)\0*\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\x000\x001\x002\x003\x004\x005\x008\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\x007\x007\x009\0=\0,\0>\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0?\0@\0A\0B\0C\0D\0E\0G\0H\0I\0J\0K\0L\0M\0N\0O\0Q\0R\0S\0T\0V\0W\0X\0Y\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff,\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),
       caml_new_string(""),
       caml_new_string(""),
       caml_new_string(""),
       caml_new_string(""),
       caml_new_string(""),
       caml_new_string("")],
     cst_expect_test_collector$0=caml_new_string("expect_test_collector"),
     cst$2=caml_new_string(": "),
     cst$3=caml_new_string(""),
     cst$1=caml_new_string(""),
     cst_Expect_test_collector_Instance_save_output_called_after_test_has_ended_loc_sexp_File_Location_t=
      caml_new_string
       ("Expect_test_collector.Instance.save_output called after test has ended (loc = %{sexp:File.Location.t})"),
     cst_Expect_test_collector_Instance_save_output_called_after_test_has_ended_loc=
      caml_new_string
       ("Expect_test_collector.Instance.save_output called after test has ended (loc = "),
     cst_output=caml_new_string("output"),
     cst_expect_test=caml_new_string("expect-test"),
     cst_Expect_test_collector_get_not_set=
      caml_new_string("Expect_test_collector.get: not set"),
     cst_Expect_test_collector_unset_not_set=
      caml_new_string("Expect_test_collector.unset: not set"),
     cst_Expect_test_collector_set_already_set=
      caml_new_string("Expect_test_collector.set: already set"),
     cst$0=caml_new_string(""),
     cst_expect_test_collector$1=caml_new_string("expect_test_collector"),
     cst_expect_test_collector$2=caml_new_string("expect_test_collector"),
     Stdlib_lexing=global_data.Stdlib__lexing,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Stdlib_listLabels=global_data.Stdlib__listLabels,
     Stdlib=global_data.Stdlib,
     Stdlib_printf=global_data.Stdlib__printf,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Sexplib0_Sexp=global_data.Sexplib0__Sexp,
     Expect_test_config=global_data.Expect_test_config,
     Stdlib_filename=global_data.Stdlib__filename,
     Caml=global_data.Caml,
     Expect_test_collector=[0,0,0];
    caml_register_global(26,Expect_test_collector,"Expect_test_collector__");
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_expect_test_collector,cst);
    var
     _i_=
      [0,
       [11,
        caml_new_string
         ("Trying to run an expect test from the wrong file.\n- test declared at "),
        [2,
         0,
         [12,
          58,
          [4,
           0,
           0,
           0,
           [11,caml_new_string("\n- trying to run it from "),[2,0,[12,10,0]]]]]]],
       caml_new_string
        ("Trying to run an expect test from the wrong file.\n- test declared at %s:%d\n- trying to run it from %s\n")],
     _f_=
      [0,
       [11,
        caml_new_string("\nSTOPPED COLLECTING OUTPUT AFTER "),
        [4,
         0,
         0,
         0,
         [11,
          caml_new_string
           (" FLUSHING ATTEMPS\nTHERE MUST BE A BACKGROUND JOB PRINTING TO STDOUT\n"),
          0]]],
       caml_new_string
        ("\nSTOPPED COLLECTING OUTPUT AFTER %d FLUSHING ATTEMPS\nTHERE MUST BE A BACKGROUND JOB PRINTING TO STDOUT\n")],
     _g_=[12,41,0],
     _h_=[0,0],
     _d_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _c_=
      [0,
       [11,
        caml_new_string("File "),
        [3,
         0,
         [11,
          caml_new_string(", line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(", characters "),
            [4,
             0,
             0,
             0,
             [12,
              45,
              [4,
               0,
               0,
               0,
               [11,
                caml_new_string
                 (":\nError: program exited while expect test was running!\nOutput captured so far:\n"),
                [10,0]]]]]]]]]],
       caml_new_string
        ("File %S, line %d, characters %d-%d:\nError: program exited while expect test was running!\nOutput captured so far:\n%!")],
     _e_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _b_=[0,0,0],
     _a_=
      [0,
       [11,
        caml_new_string("\n(* "),
        [2,
         0,
         [11,
          caml_new_string
           ("expect_test_collector: This test expectation appears to contain a backtrace.\n   This is strongly discouraged as backtraces are fragile.\n   Please change this test to not include a backtrace. *)\n\n"),
          [2,0,0]]]],
       caml_new_string
        ("\n(* %sexpect_test_collector: This test expectation appears to contain a backtrace.\n   This is strongly discouraged as backtraces are fragile.\n   Please change this test to not include a backtrace. *)\n\n%s")];
    function contains_backtraces(s)
     {var lexbuf=caml_call1(Stdlib_lexing[3],s),ocaml_lex_state=0;
      for(;;)
       {var
         ocaml_lex_state$0=
          caml_call3
           (Stdlib_lexing[17],ocaml_lex_tables,ocaml_lex_state,lexbuf);
        if(0 === ocaml_lex_state$0)return 1;
        if(1 === ocaml_lex_state$0)
         a:
         for(;;)
          {var ocaml_lex_state$1=44;
           for(;;)
            {var
              ocaml_lex_state$2=
               caml_call3
                (Stdlib_lexing[17],ocaml_lex_tables,ocaml_lex_state$1,lexbuf);
             if(2 < ocaml_lex_state$2 >>> 0)
              {caml_call1(lexbuf[1],lexbuf);
               var ocaml_lex_state$1=ocaml_lex_state$2;
               continue}
             switch(ocaml_lex_state$2)
              {case 0:return 1;case 1:continue a;default:return 0}}}
        caml_call1(lexbuf[1],lexbuf);
        var ocaml_lex_state=ocaml_lex_state$0;
        continue}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_expect_test_collector$0);
    var Expect_test_collector_Check_backtraces=[0,contains_backtraces];
    caml_register_global
     (29,
      Expect_test_collector_Check_backtraces,
      "Expect_test_collector__Check_backtraces");
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_expect_test_collector$1,cst$0);
    var Test_outcome=[0],tests_run=[0,0];
    function protect(finally$0,f)
     {try
       {var x=caml_call1(f,0)}
      catch(e){e = caml_wrap_exception(e);caml_call1(finally$0,0);throw e}
      caml_call1(finally$0,0);
      return x}
    var current=[0,0];
    function set(absolute_filename)
     {return current[1]
              ?caml_call1(Stdlib[3],cst_Expect_test_collector_set_already_set)
              :(current[1] = [0,absolute_filename],0)}
    function unset(param)
     {return current[1]
              ?(current[1] = 0,0)
              :caml_call1(Stdlib[3],cst_Expect_test_collector_unset_not_set)}
    function tests_run$0(param)
     {return caml_call1(Stdlib_listLabels[9],tests_run[1])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_expect_test_collector$2);
    var
     _j_=[0,set,unset],
     Expect_test_collector$0=
      [0,
       Test_outcome,
       function(C)
        {function _k_(t,f){return caml_call2(C[1][2],t,f)}
         var
          return$0=C[1][1],
          run=C[3],
          flushed=C[4],
          upon_unreleasable_issue=C[5];
         function flush(param)
          {caml_call1(Stdlib[1][51],Stdlib[1][27]);
           caml_call1(Stdlib[1][51],Stdlib[1][28]);
           return caml_call1(C[2],0)}
         function get_position(param)
          {return runtime.caml_out_channel_pos_fd(Stdlib[28])}
         function extract_output(ic,len)
          {var s=caml_call2(Stdlib[75],ic,len);
           if(contains_backtraces(s))
            {var
              cr_prefix=
               caml_call1(Expect_test_config[1][2],upon_unreleasable_issue);
             return caml_call3(Stdlib_printf[4],_a_,cr_prefix,s)}
           return s}
         function get_outputs_and_cleanup(t)
          {var last_ofs=get_position(0);
           runtime.expect_test_collector_after_test(Stdlib[28],Stdlib[29]);
           caml_call1(Stdlib[65],t[2]);
           var
            _I_=t[3],
            _J_=caml_call1(Expect_test_common_File[2],0),
            fname=caml_call2(Expect_test_common_File[1][1],_J_,_I_);
           function _K_(param)
            {var ic=caml_call1(Stdlib[68],fname);
             function _L_(param)
              {var _M_=caml_call1(Stdlib_listLabels[9],t[1]);
               function _N_(param,_O_)
                {var
                  next_ofs=_O_[2],
                  loc=_O_[1],
                  acc=param[2],
                  ofs=param[1],
                  s=extract_output(ic,next_ofs - ofs | 0);
                 return [0,next_ofs,[0,[0,loc,s],acc]]}
               var
                match=caml_call3(Stdlib_listLabels[20],_N_,_b_,_M_),
                outputs=match[2],
                ofs=match[1],
                trailing_output=extract_output(ic,last_ofs - ofs | 0);
               return [0,
                       caml_call1(Stdlib_listLabels[9],outputs),
                       trailing_output]}
             return protect
                     (function(param){return caml_call1(Stdlib[82],ic)},_L_)}
           return protect
                   (function(param){return runtime.caml_sys_remove(fname)},_K_)}
         var current_test=[0,0];
         function _l_(param)
          {var _z_=current_test[1];
           if(_z_)
            {var _A_=_z_[1],_B_=_A_[1],_C_=_A_[2][1];
             if(_C_)
              {var
                running=_C_[1],
                match=get_outputs_and_cleanup(running),
                trailing=match[2],
                blocks=match[1],
                _D_=_B_[5] - _B_[3] | 0,
                _E_=_B_[4] - _B_[3] | 0,
                _F_=_B_[2],
                _G_=caml_call1(Expect_test_common_File[1][7],_B_[1]);
               caml_call5(Stdlib_printf[3],_c_,_G_,_F_,_E_,_D_);
               var
                _H_=
                 function(param)
                  {var s=param[2];return caml_call2(Stdlib_printf[3],_d_,s)};
               caml_call2(Stdlib_listLabels[15],_H_,blocks);
               return caml_call2(Stdlib_printf[3],_e_,trailing)}}
           return 0}
         caml_call1(Caml[89],_l_);
         function final_flush(opt,k)
          {if(opt)var sth=opt[1],count=sth;else var count=0;
           var max_attempts=10;
           function _y_(param)
            {return caml_call1(flushed,0)
                     ?caml_call1(k,cst$1)
                     :count === 10
                       ?caml_call1(k,caml_call2(Stdlib_printf[4],_f_,max_attempts))
                       :final_flush([0,count + 1 | 0],k)}
           return _k_(flush(0),_y_)}
         function save_output(t,location)
          {var _u_=t[1];
           if(_u_)
            {var
              running=_u_[1],
              _v_=
               function(param)
                {var pos=get_position(0);
                 running[1] = [0,[0,location,pos],running[1]];
                 return caml_call1(return$0,0)};
             return _k_(flush(0),_v_)}
           var
            _w_=
             [0,
              [11,
               cst_Expect_test_collector_Instance_save_output_called_after_test_has_ended_loc,
               [24,
                _h_,
                function(param,custom_printf_001)
                 {var
                   _x_=
                    caml_call1(Expect_test_common_File[3][2],custom_printf_001);
                  return caml_call2(Sexplib0_Sexp[13],0,_x_)},
                _g_]],
              cst_Expect_test_collector_Instance_save_output_called_after_test_has_ended_loc_sexp_File_Location_t];
           return caml_call3(Stdlib_printf[9],Stdlib[3],_w_,location)}
         function run$0
          (file_digest,
           location,
           defined_in,
           description,
           tags,
           expectations,
           inline_test_config,
           f)
          {function _m_(param)
            {var _s_=current[1];
             if(_s_)
              var fn=_s_[1],registering_tests_for=fn;
             else
              var
               registering_tests_for=
                caml_call1(Stdlib[3],cst_Expect_test_collector_get_not_set);
             if
              (runtime.caml_string_notequal(defined_in,registering_tests_for))
              return caml_call5
                      (Stdlib_printf[9],
                       Stdlib[3],
                       _i_,
                       defined_in,
                       location[2],
                       registering_tests_for);
             caml_call1(run,flush);
             var
              filename=
               caml_call3(Stdlib_filename[14],0,cst_expect_test,cst_output),
              chan=caml_call1(Stdlib[49],filename);
             runtime.expect_test_collector_before_test
              (chan,Stdlib[28],Stdlib[29]);
             var
              running=
               [0,0,chan,caml_call1(Expect_test_common_File[1][6],filename)],
              t=[0,[0,running]];
             current_test[1] = [0,[0,location,t]];
             function finally$0(param)
              {current_test[1] = 0;
               return caml_call1
                       (run,
                        function(param)
                         {return final_flush
                                  (0,
                                   function(append)
                                    {t[1] = 0;
                                     var
                                      match=get_outputs_and_cleanup(running),
                                      trailing_output=match[2],
                                      saved_output=match[1],
                                      _t_=tests_run[1];
                                     tests_run[1]
                                     =
                                     [0,
                                      [0,
                                       file_digest,
                                       location,
                                       expectations,
                                       saved_output,
                                       caml_call2(Stdlib[17],trailing_output,append),
                                       upon_unreleasable_issue],
                                      _t_];
                                     return caml_call1(return$0,0)})})}
             protect
              (finally$0,
               function(param)
                {return caml_call1
                         (run,function(param){return caml_call1(f,t)})});
             return 1}
           var
            _n_=location[5] - location[3] | 0,
            _o_=location[4] - location[3] | 0,
            _p_=location[2],
            _q_=caml_call1(Expect_test_common_File[1][7],location[1]);
           if(description)
            var s=description[1],_r_=caml_call2(Stdlib[17],cst$2,s);
           else
            var _r_=cst$3;
           return caml_call8
                   (Ppx_inline_test_lib_Runtime[4],
                    inline_test_config,
                    _r_,
                    tags,
                    _q_,
                    _p_,
                    _o_,
                    _n_,
                    _m_)}
         return [0,[0,save_output],run$0]},
       tests_run$0,
       _j_];
    caml_register_global(38,Expect_test_collector$0,"Expect_test_collector");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb2xsZWN0b3IuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
