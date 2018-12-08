(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_got_unexpected_result=caml_new_string("got unexpected result"),
     cst_comparison_failed=caml_new_string("comparison failed"),
     cst_predicate_failed=caml_new_string("predicate failed"),
     cst=caml_new_string(": "),
     cst_Ppx_assert_lib_Runtime_E=caml_new_string("Ppx_assert_lib.Runtime.E"),
     Base=global_data.Base,
     Base_Source_code_position=global_data.Base__Source_code_position,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Ppx_assert_lib=[0,0];
    caml_register_global(13,Ppx_assert_lib,"Ppx_assert_lib");
    var
     E=[248,cst_Ppx_assert_lib_Runtime_E,runtime.caml_fresh_oo_id(0)],
     _h_=[0,caml_new_string("got")],
     _i_=[0,caml_new_string("expected")],
     _g_=[0,caml_new_string("vs")],
     _f_=[0,caml_new_string("Value")],
     _d_=[0,caml_new_string("Stack")],
     _e_=[0,caml_new_string("Loc")],
     _b_=[0,caml_new_string("runtime-lib/runtime.ml.E")],
     _c_=[0,caml_new_string("runtime-lib/runtime.ml"),26,10];
    function _a_(param)
     {if(param[1] === E)
       {var
         v1=param[3],
         v0=param[2],
         v0$0=caml_call1(Base[249],v0),
         v1$0=caml_call1(Base[192][4],v1);
        return [1,[0,_b_,[0,v0$0,[0,v1$0,0]]]]}
      throw [0,Assert_failure,_c_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,E,_a_);
    function fail_in_sexp_style(message,pos,here,tag,body)
     {if(message)
       var
        s=message[1],
        _m_=caml_call2(Base[296],cst,tag),
        message$0=caml_call2(Base[296],s,_m_);
      else
       var message$0=tag;
      var
       _n_=
        here
         ?[0,
           [1,
            [0,
             _d_,
             [0,
              caml_call1
               (caml_call1(Base[232],Base_Source_code_position[3]),here),
              0]]],
           0]
         :0,
       _o_=caml_call2(Base[258],[0,[1,[0,_e_,[0,[0,pos],0]]],0],_n_),
       sexp=[1,caml_call2(Base[258],body,_o_)];
      throw [0,E,message$0,sexp]}
    function test_pred(pos,sexpifier,here,message,predicate,t)
     {var _l_=1 - caml_call1(predicate,t);
      return _l_
              ?fail_in_sexp_style
                (message,
                 pos,
                 here,
                 cst_predicate_failed,
                 [0,[1,[0,_f_,[0,caml_call1(sexpifier,t),0]]],0])
              :_l_}
    var r_diff=[0,0];
    function set_diff_function(f){r_diff[1] = f;return 0}
    function test_result_or_eq(sexpifier,comparator,equal,expect$0,got$0)
     {if(equal)
       var f=equal[1],pass=caml_call2(f,got$0,expect$0);
      else
       var
        _k_=caml_call2(comparator,got$0,expect$0),
        pass=caml_call2(Base[281],_k_,0);
      if(pass)return 892014833;
      var
       got=caml_call1(sexpifier,got$0),
       expect=caml_call1(sexpifier,expect$0),
       _j_=r_diff[1];
      if(_j_)
       {var
         diff=_j_[1],
         from=caml_call2(Base[192][13],0,expect),
         to=caml_call2(Base[192][13],0,got);
        caml_call2(diff,from,to)}
      return [0,781116926,[0,expect,got]]}
    function test_eq(pos,sexpifier,comparator,here,message,equal,t1,t2)
     {var match=test_result_or_eq(sexpifier,comparator,equal,t1,t2);
      if(typeof match === "number")return 0;
      var match$0=match[2],t2$0=match$0[2],t1$0=match$0[1];
      return fail_in_sexp_style
              (message,
               pos,
               here,
               cst_comparison_failed,
               [0,t1$0,[0,_g_,[0,t2$0,0]]])}
    function test_result
     (pos,sexpifier,comparator,here,message,equal,expect,got)
     {var match=test_result_or_eq(sexpifier,comparator,equal,expect,got);
      if(typeof match === "number")return 0;
      var match$0=match[2],got$0=match$0[2],expect$0=match$0[1];
      return fail_in_sexp_style
              (message,
               pos,
               here,
               cst_got_unexpected_result,
               [0,[1,[0,_i_,[0,expect$0,0]]],[0,[1,[0,_h_,[0,got$0,0]]],0]])}
    var
     Ppx_assert_lib_Runtime=
      [0,test_pred,test_eq,test_result,set_diff_function];
    caml_register_global(18,Ppx_assert_lib_Runtime,"Ppx_assert_lib__Runtime");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfYXNzZXJ0X2xpYi5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
