(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     Stdlib_digest=global_data.Stdlib__digest,
     Assert_failure=global_data.Assert_failure,
     compare=runtime.caml_compare,
     _a_=[0,caml_new_string("md5/src/md5_lib.ml"),8,22],
     length=16;
    function to_binary(s){return s}
    function of_binary_exn(s)
     {if(runtime.caml_ml_string_length(s) === 16)return s;
      throw [0,Assert_failure,_a_]}
    function unsafe_of_binary(s){return s}
    var
     to_hex=Stdlib_digest[10],
     of_hex_exn=Stdlib_digest[11],
     string=Stdlib_digest[3],
     bytes=Stdlib_digest[4];
    function subbytes(bytes,pos,len)
     {return caml_call3(Stdlib_digest[6],bytes,pos,len)}
    var
     Md5_lib=
      [0,
       compare,
       length,
       to_binary,
       of_binary_exn,
       unsafe_of_binary,
       to_hex,
       of_hex_exn,
       string,
       bytes,
       subbytes];
    runtime.caml_register_global(3,Md5_lib,"Md5_lib");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJtZDVfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
