(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_sys_getenv=runtime.caml_sys_getenv,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_ml=caml_new_string(".ml."),
     cst=caml_new_string("."),
     null$0=caml_new_string("<unknown>"),
     cst_BENCHMARKS_RUNNER=caml_new_string("BENCHMARKS_RUNNER"),
     cst$0=caml_new_string(""),
     cst_TRUE=caml_new_string("TRUE"),
     cst_FORCE_DROP_BENCH=caml_new_string("FORCE_DROP_BENCH"),
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_list=global_data.Stdlib__list,
     Not_found=global_data.Not_found,
     Stdlib_string=global_data.Stdlib__string,
     Ppx_bench_lib=[0,0,0];
    caml_register_global(7,Ppx_bench_lib,"Ppx_bench_lib");
    var r=[0,0],libname_ref=[0,null$0];
    function set(str){libname_ref[1] = str;return 0}
    function unset(param){libname_ref[1] = null$0;return 0}
    var t=[0,0];
    function push(s){t[1] = [0,s,t[1]];return 0}
    function pop_exn(param){t[1] = caml_call1(Stdlib_list[6],t[1]);return 0}
    function compare(t1,t2){return runtime.caml_int_compare(t1[1],t2[1])}
    function get_indexed_arg_name(t)
     {var _s_=t[9];
      if(0 === _s_[0])return 0;
      var match=_s_[1],arg_name=match[1];
      return [0,arg_name]}
    function get_module_name_opt(t)
     {var str=t[3],len=runtime.caml_ml_string_length(str),i=0;
      for(;;)
       {if((i + 4 | 0) <= len)
         {if(caml_string_equal(caml_call3(Stdlib_string[4],str,i,4),cst_ml))
           return [0,
                   caml_call3
                    (Stdlib_string[4],str,i + 4 | 0,(len - i | 0) - 4 | 0)];
          var i$0=i + 1 | 0,i=i$0;
          continue}
        return 0}}
    var Entry=[0,compare,get_indexed_arg_name,get_module_name_opt];
    try
     {var _b_=caml_sys_getenv(cst_BENCHMARKS_RUNNER),v=_b_}
    catch(_r_)
     {_r_ = caml_wrap_exception(_r_);
      if(_r_ !== Not_found)throw _r_;
      var v=cst$0}
    var
     add_environment_var=caml_string_equal(v,cst_TRUE),
     libs_to_entries=caml_call2(Stdlib_hashtbl[1],0,10);
    function lookup_rev_lib(libname)
     {try
       {var _p_=caml_call2(Stdlib_hashtbl[6],libs_to_entries,libname);
        return _p_}
      catch(_q_)
       {_q_ = caml_wrap_exception(_q_);
        if(_q_ === Not_found)return 0;
        throw _q_}}
    function lookup_lib(libname)
     {var _o_=lookup_rev_lib(libname);return caml_call1(Stdlib_list[9],_o_)}
    try
     {caml_sys_getenv(cst_FORCE_DROP_BENCH);var _a_=1,force_drop=_a_}
    catch(_n_)
     {_n_ = caml_wrap_exception(_n_);
      if(_n_ !== Not_found)throw _n_;
      var force_drop=0}
    function get_mode(param){return force_drop?-950194894:984731018}
    function add_bench
     (name,code,filename,type_conv_path,line,startpos,endpos,test_spec)
     {var match=get_mode(0);
      if(984731018 <= match)
       {var _i_=libname_ref[1],_j_=t[1];
        if(_j_)
         var
          _k_=caml_call1(Stdlib_list[9],_j_),
          _l_=[0,caml_call2(Stdlib_string[7],cst,_k_)];
        else
         var _l_=0;
        r[1]++;
        var
         entry=
          [0,
           r[1],
           code,
           type_conv_path,
           name,
           filename,
           line,
           startpos,
           endpos,
           test_spec,
           _l_],
         _m_=[0,entry,lookup_rev_lib(_i_)];
        return caml_call3(Stdlib_hashtbl[5],libs_to_entries,_i_,_m_)}
      return 0}
    function add_bench_module(name,param,_g_,_f_,_e_,_d_,_c_,f)
     {var match=get_mode(0);
      if(984731018 <= match)
       {push(name);
        try
         {caml_call1(f,0);var _h_=pop_exn(0);return _h_}
        catch(ex){ex = caml_wrap_exception(ex);pop_exn(0);throw ex}}
      return 0}
    var
     Ppx_bench_lib_Benchmark_accumulator=
      [0,
       [0,set,unset],
       Entry,
       add_environment_var,
       lookup_lib,
       add_bench,
       add_bench_module];
    caml_register_global
     (12,
      Ppx_bench_lib_Benchmark_accumulator,
      "Ppx_bench_lib__Benchmark_accumulator");
    var Ppx_bench_lib_Export=[0];
    caml_register_global(13,Ppx_bench_lib_Export,"Ppx_bench_lib__Export");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfYmVuY2hfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
