(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    var
     cst_CR=caml_new_string("CR "),
     cst=caml_new_string(""),
     equal=runtime.caml_equal;
    function comment_prefix(param){return 15023 <= param?cst_CR:cst}
    var Upon_unreleasable_issue=[0,equal,comment_prefix];
    function return$0(x){return x}
    function bind(t,f){return caml_call1(f,t)}
    var IO=[0,return$0,bind];
    function flush(param){return 0}
    function run(f){return caml_call1(f,0)}
    function flushed(param){return 1}
    var
     Expect_test_config=
      [0,Upon_unreleasable_issue,IO,flush,run,flushed,15023];
    runtime.caml_register_global(2,Expect_test_config,"Expect_test_config");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb25maWcuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdfQ==
