(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_bytes_unsafe_set=runtime.caml_bytes_unsafe_set,
     caml_check_bound=runtime.caml_check_bound,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_float_of_string=runtime.caml_float_of_string,
     caml_format_float=runtime.caml_format_float,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_int_of_string=runtime.caml_int_of_string,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst$11=caml_new_string(""),
     cst$2=caml_new_string("("),
     cst$3=caml_new_string("()"),
     cst$4=caml_new_string(")"),
     cst$5=caml_new_string(" "),
     cst$6=caml_new_string("("),
     cst$7=caml_new_string("()"),
     cst$8=caml_new_string(")"),
     cst$10=caml_new_string("()"),
     cst$9=caml_new_string("()"),
     cst=caml_new_string("\\"),
     cst_n=caml_new_string("\\n"),
     cst$0=caml_new_string(' "'),
     cst$1=caml_new_string('"'),
     cst_Sexplib0_Sexp_Not_found_s=
      caml_new_string("Sexplib0.Sexp.Not_found_s"),
     cst_Sexplib0_Sexp_Of_sexp_error=
      caml_new_string("Sexplib0.Sexp.Of_sexp_error"),
     cst_Assert_failure=caml_new_string("Assert_failure"),
     cst_Match_failure=caml_new_string("Match_failure"),
     cst_fun_of_sexp_cannot_convert_function_values=
      caml_new_string("fun_of_sexp: cannot convert function values"),
     cst_opaque_of_sexp_cannot_convert_opaque_values=
      caml_new_string("opaque_of_sexp: cannot convert opaque values"),
     cst_hashtbl_of_sexp_tuple_list_needed=
      caml_new_string("hashtbl_of_sexp: tuple list needed"),
     cst_hashtbl_of_sexp_list_needed=
      caml_new_string("hashtbl_of_sexp: list needed"),
     cst_array_of_sexp_list_needed=
      caml_new_string("array_of_sexp: list needed"),
     cst_list_of_sexp_list_needed=caml_new_string("list_of_sexp: list needed"),
     cst_triple_of_sexp_list_needed=
      caml_new_string("triple_of_sexp: list needed"),
     cst_triple_of_sexp_list_must_contain_exactly_three_elements_only=
      caml_new_string
       ("triple_of_sexp: list must contain exactly three elements only"),
     cst_pair_of_sexp_list_needed=caml_new_string("pair_of_sexp: list needed"),
     cst_pair_of_sexp_list_must_contain_exactly_two_elements_only=
      caml_new_string
       ("pair_of_sexp: list must contain exactly two elements only"),
     cst_None=caml_new_string("None"),
     cst_none=caml_new_string("none"),
     cst_option_of_sexp_only_none_can_be_atom=
      caml_new_string("option_of_sexp: only none can be atom"),
     cst_Some=caml_new_string("Some"),
     cst_some=caml_new_string("some"),
     cst_option_of_sexp_list_must_represent_optional_value=
      caml_new_string("option_of_sexp: list must represent optional value"),
     cst_None$0=caml_new_string("None"),
     cst_none$0=caml_new_string("none"),
     cst_option_of_sexp_only_none_can_be_atom$0=
      caml_new_string("option_of_sexp: only none can be atom"),
     cst_Some$0=caml_new_string("Some"),
     cst_some$0=caml_new_string("some"),
     cst_option_of_sexp_list_must_be_some_el=
      caml_new_string("option_of_sexp: list must be (some el)"),
     cst_nativeint_of_sexp=caml_new_string("nativeint_of_sexp: "),
     cst_nativeint_of_sexp_atom_needed=
      caml_new_string("nativeint_of_sexp: atom needed"),
     cst_int64_of_sexp=caml_new_string("int64_of_sexp: "),
     cst_int64_of_sexp_atom_needed=
      caml_new_string("int64_of_sexp: atom needed"),
     cst_int32_of_sexp=caml_new_string("int32_of_sexp: "),
     cst_int32_of_sexp_atom_needed=
      caml_new_string("int32_of_sexp: atom needed"),
     cst_float_of_sexp=caml_new_string("float_of_sexp: "),
     cst_float_of_sexp_atom_needed=
      caml_new_string("float_of_sexp: atom needed"),
     cst_int_of_sexp=caml_new_string("int_of_sexp: "),
     cst_int_of_sexp_atom_needed=caml_new_string("int_of_sexp: atom needed"),
     cst_char_of_sexp_atom_string_must_contain_one_character_only=
      caml_new_string
       ("char_of_sexp: atom string must contain one character only"),
     cst_char_of_sexp_atom_needed=caml_new_string("char_of_sexp: atom needed"),
     cst_bytes_of_sexp_atom_needed=
      caml_new_string("bytes_of_sexp: atom needed"),
     cst_string_of_sexp_atom_needed=
      caml_new_string("string_of_sexp: atom needed"),
     cst_False=caml_new_string("False"),
     cst_True=caml_new_string("True"),
     cst_false=caml_new_string("false"),
     cst_true=caml_new_string("true"),
     cst_bool_of_sexp_unknown_string=
      caml_new_string("bool_of_sexp: unknown string"),
     cst_bool_of_sexp_atom_needed=caml_new_string("bool_of_sexp: atom needed"),
     cst_unit_of_sexp_empty_list_needed=
      caml_new_string("unit_of_sexp: empty list needed"),
     cst_15G=caml_new_string("%.15G"),
     cst_17G=caml_new_string("%.17G"),
     cst$13=caml_new_string(" "),
     cst_of_sexp_trying_to_convert_an_empty_type=
      caml_new_string("_of_sexp: trying to convert an empty type"),
     cst_of_sexp_trying_to_convert_a_silly_type=
      caml_new_string("_of_sexp: trying to convert a silly type"),
     cst_of_sexp_the_empty_list_is_an_invalid_polymorphic_variant=
      caml_new_string
       ("_of_sexp: the empty list is an invalid polymorphic variant"),
     cst_of_sexp_a_nested_list_is_an_invalid_polymorphic_variant=
      caml_new_string
       ("_of_sexp: a nested list is an invalid polymorphic variant"),
     cst_of_sexp_polymorphic_variant_tag_takes_an_argument=
      caml_new_string("_of_sexp: polymorphic variant tag takes an argument"),
     cst_of_sexp_polymorphic_variant_does_not_take_arguments=
      caml_new_string("_of_sexp: polymorphic variant does not take arguments"),
     cst_of_sexp_no_matching_variant_found=
      caml_new_string("_of_sexp: no matching variant found"),
     cst_of_sexp_cannot_convert_values_of_types_resulting_from_polymorphic_record_fields=
      caml_new_string
       ("_of_sexp: cannot convert values of types resulting from polymorphic record fields"),
     cst_of_sexp_list_instead_of_atom_for_record_expected=
      caml_new_string("_of_sexp: list instead of atom for record expected"),
     cst_extra_fields=caml_new_string("extra fields"),
     cst_duplicate_fields=caml_new_string("duplicate fields"),
     cst$12=caml_new_string(" "),
     cst_of_sexp_record_conversion_only_pairs_expected_their_first_element_must_be_an_atom=
      caml_new_string
       ("_of_sexp: record conversion: only pairs expected, their first element must be an atom"),
     cst_of_sexp_unexpected_sum_tag=
      caml_new_string("_of_sexp: unexpected sum tag"),
     cst_of_sexp_the_empty_list_is_an_invalid_sum=
      caml_new_string("_of_sexp: the empty list is an invalid sum"),
     cst_of_sexp_a_nested_list_is_an_invalid_sum=
      caml_new_string("_of_sexp: a nested list is an invalid sum"),
     cst_of_sexp_sum_tag_must_be_a_structured_value=
      caml_new_string("_of_sexp: sum tag must be a structured value"),
     cst_of_sexp_sum_tag_does_not_take_arguments=
      caml_new_string("_of_sexp: sum tag does not take arguments"),
     cst_Sexplib0_Sexp_conv_error_No_variant_match=
      caml_new_string("Sexplib0.Sexp_conv_error.No_variant_match"),
     Stdlib_stringLabels=global_data.Stdlib__stringLabels,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_listLabels=global_data.Stdlib__listLabels,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Not_found=global_data.Not_found,
     Stdlib_bytesLabels=global_data.Stdlib__bytesLabels,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Assert_failure=global_data.Assert_failure,
     Stdlib=global_data.Stdlib,
     End_of_file=global_data.End_of_file,
     Failure=global_data.Failure,
     Invalid_argument=global_data.Invalid_argument,
     Match_failure=global_data.Match_failure,
     Sys_error=global_data.Sys_error,
     Stdlib_arg=global_data.Stdlib__arg,
     Stdlib_lazy=global_data.Stdlib__lazy,
     Stdlib_parsing=global_data.Stdlib__parsing,
     Stdlib_queue=global_data.Stdlib__queue,
     Stdlib_scanf=global_data.Stdlib__scanf,
     Stdlib_stack=global_data.Stdlib__stack,
     Stdlib_stream=global_data.Stdlib__stream,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_moreLabels=global_data.Stdlib__moreLabels,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib_obj=global_data.Stdlib__obj,
     Stdlib_ephemeron=global_data.Stdlib__ephemeron,
     Stdlib_gc=global_data.Stdlib__gc,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_nativeint=global_data.Stdlib__nativeint,
     Stdlib_int64=global_data.Stdlib__int64,
     Stdlib_int32=global_data.Stdlib__int32,
     Sexplib0=[0,0,0,0];
    caml_register_global(137,Sexplib0,"Sexplib0");
    var
     _b_=[0,[15,[17,2,0]],caml_new_string("%a@?")],
     _a_=[0,0,0],
     _aC_=[0,0],
     _az_=[0,caml_new_string("sexp_conv.ml"),346,17],
     _aw_=[0,caml_new_string("Exit")],
     _ax_=[0,caml_new_string("sexp_conv.ml"),351,17],
     _as_=[0,caml_new_string("End_of_file")],
     _at_=[0,caml_new_string("sexp_conv.ml"),356,17],
     _ap_=[0,caml_new_string("Failure")],
     _aq_=[0,caml_new_string("sexp_conv.ml"),361,17],
     _am_=[0,caml_new_string("Not_found")],
     _an_=[0,caml_new_string("sexp_conv.ml"),366,17],
     _aj_=[0,caml_new_string("Invalid_argument")],
     _ak_=[0,caml_new_string("sexp_conv.ml"),371,17],
     _ah_=[0,caml_new_string("sexp_conv.ml"),376,17],
     _ae_=[0,caml_new_string("Not_found_s")],
     _af_=[0,caml_new_string("sexp_conv.ml"),381,17],
     _ab_=[0,caml_new_string("Sys_error")],
     _ac_=[0,caml_new_string("sexp_conv.ml"),386,17],
     ___=[0,caml_new_string("Arg.Help")],
     _$_=[0,caml_new_string("sexp_conv.ml"),391,17],
     _W_=[0,caml_new_string("Arg.Bad")],
     _X_=[0,caml_new_string("sexp_conv.ml"),396,17],
     _S_=[0,caml_new_string("Lazy.Undefined")],
     _T_=[0,caml_new_string("sexp_conv.ml"),401,17],
     _O_=[0,caml_new_string("Parsing.Parse_error")],
     _P_=[0,caml_new_string("sexp_conv.ml"),406,17],
     _K_=[0,caml_new_string("Queue.Empty")],
     _L_=[0,caml_new_string("sexp_conv.ml"),411,17],
     _G_=[0,caml_new_string("Scanf.Scan_failure")],
     _H_=[0,caml_new_string("sexp_conv.ml"),416,17],
     _C_=[0,caml_new_string("Stack.Empty")],
     _D_=[0,caml_new_string("sexp_conv.ml"),421,17],
     _y_=[0,caml_new_string("Stream.Failure")],
     _z_=[0,caml_new_string("sexp_conv.ml"),426,17],
     _u_=[0,caml_new_string("Stream.Error")],
     _v_=[0,caml_new_string("sexp_conv.ml"),431,17],
     _q_=[0,caml_new_string("Sys.Break")],
     _r_=[0,caml_new_string("sexp_conv.ml"),436,17],
     _m_=[0,caml_new_string("Sexplib.Conv.Of_sexp_error")],
     _n_=[0,caml_new_string("sexp_conv.ml"),442,17],
     _k_=
      [0,
       [2,0,[12,32,[2,0,[12,58,[4,0,0,0,[12,58,[4,0,0,0,0]]]]]]],
       caml_new_string("%s %s:%d:%d")],
     _j_=[0,2],
     _h_=[0,caml_new_string("<fun>")],
     _g_=[0,caml_new_string("<opaque>")],
     _d_=[0,caml_new_string("some")],
     _e_=[1,0],
     _f_=[0,caml_new_string("none")],
     _c_=[1,0],
     _aH_=
      [0,
       [2,
        0,
        [11,
         caml_new_string("_of_sexp: polymorphic variant tag "),
         [3,0,[11,caml_new_string(" has incorrect number of arguments"),0]]]],
       caml_new_string
        ("%s_of_sexp: polymorphic variant tag %S has incorrect number of arguments")],
     _aG_=
      [0,
       [2,
        0,
        [11,
         caml_new_string
          ("_of_sexp: the following record elements were undefined: "),
         [2,0,0]]],
       caml_new_string
        ("%s_of_sexp: the following record elements were undefined: %s")],
     _aF_=
      [0,
       [2,
        0,
        [11,
         caml_new_string("_of_sexp: "),
         [2,0,[11,caml_new_string(": "),[2,0,0]]]]],
       caml_new_string("%s_of_sexp: %s: %s")],
     _aE_=
      [0,
       [2,
        0,
        [11,
         caml_new_string("_of_sexp: sum tag "),
         [3,0,[11,caml_new_string(" has incorrect number of arguments"),0]]]],
       caml_new_string
        ("%s_of_sexp: sum tag %S has incorrect number of arguments")],
     _aD_=
      [0,
       [2,
        0,
        [11,
         caml_new_string("_of_sexp: tuple of size "),
         [4,0,0,0,[11,caml_new_string(" expected"),0]]]],
       caml_new_string("%s_of_sexp: tuple of size %d expected")];
    function sexp_of_t(t){return t}
    function t_of_sexp(t){return t}
    function compare(a$0,match)
     {if(a$0 === match)return 0;
      if(0 === a$0[0])
       {var _b8_=a$0[1];
        if(0 === match[0])
         {var b$0=match[1];
          return caml_call2(Stdlib_stringLabels[33],_b8_,b$0)}
        return -1}
      var _b9_=a$0[1];
      if(0 === match[0])return 1;
      var b$1=match[1],a=_b9_,b=b$1;
      for(;;)
       {if(a)
         {if(b)
           {var ys=b[2],y=b[1],xs=a[2],x=a[1],res=compare(x,y);
            if(0 === res){var a=xs,b=ys;continue}
            return res}
          return 1}
        return b?-1:0}}
    function equal(a,b){return 0 === compare(a,b)?1:0}
    var
     Not_found_s=[248,cst_Sexplib0_Sexp_Not_found_s,caml_fresh_oo_id(0)],
     Of_sexp_error=[248,cst_Sexplib0_Sexp_Of_sexp_error,caml_fresh_oo_id(0)],
     default_indent=[0,1];
    function must_escape(str)
     {var len=caml_ml_string_length(str),_bY_=0 === len?1:0;
      if(_bY_)return _bY_;
      var ix$3=len - 1 | 0,ix=ix$3;
      for(;;)
       {var match=caml_string_get(str,ix);
        if(92 <= match)
         {var switcher=match - 93 | 0;
          if(33 < switcher >>> 0)
           var switch$0=0 <= switcher?2:1;
          else
           {if(31 === switcher)
             {var _bZ_=0 < ix?1:0;
              if(_bZ_)
               {var
                 ix$0=ix - 1 | 0,
                 _b0_=caml_string_get(str,ix$0),
                 _b1_=caml_call2(Stdlib_char[8],_b0_,35);
                if(! _b1_){var ix=ix$0;continue}
                var _b2_=_b1_}
              else
               var _b2_=_bZ_;
              return _b2_}
            var switch$0=0}}
        else
         if(42 <= match)
          var switch$0=59 === match?1:0;
         else
          if(33 <= match)
           {var switcher$0=match - 33 | 0;
            switch(switcher$0)
             {case 2:
               var _b4_=0 < ix?1:0;
               if(_b4_)
                {var
                  ix$2=ix - 1 | 0,
                  _b5_=caml_string_get(str,ix$2),
                  _b6_=caml_call2(Stdlib_char[8],_b5_,124);
                 if(! _b6_){var ix=ix$2;continue}
                 var _b7_=_b6_}
               else
                var _b7_=_b4_;
               return _b7_;
              case 1:
              case 7:
              case 8:var switch$0=1;break;
              default:var switch$0=0}}
          else
           var switch$0=2;
        switch(switch$0)
         {case 0:
           var _b3_=0 < ix?1:0;
           if(_b3_){var ix$1=ix - 1 | 0,ix=ix$1;continue}
           return _b3_;
          case 1:return 1;
          default:return 1}}}
    function escaped(s)
     {var n=[0,0],_bO_=caml_ml_string_length(s) - 1 | 0,_bN_=0;
      if(! (_bO_ < 0))
       {var i$0=_bN_;
        for(;;)
         {var match=caml_string_unsafe_get(s,i$0);
          if(32 <= match)
           {var _bV_=match - 34 | 0;
            if(58 < _bV_ >>> 0)
             if(93 <= _bV_)var switch$0=0,switch$1=0;else var switch$1=1;
            else
             if(56 < (_bV_ - 1 | 0) >>> 0)
              var switch$0=1,switch$1=0;
             else
              var switch$1=1;
            if(switch$1)var _bW_=1,switch$0=2}
          else
           var switch$0=11 <= match?13 === match?1:0:8 <= match?1:0;
          switch(switch$0){case 0:var _bW_=4;break;case 1:var _bW_=2;break}
          n[1] = n[1] + _bW_ | 0;
          var _bX_=i$0 + 1 | 0;
          if(_bO_ !== i$0){var i$0=_bX_;continue}
          break}}
      if(n[1] === caml_ml_string_length(s))return s;
      var s$0=caml_create_bytes(n[1]);
      n[1] = 0;
      var _bQ_=caml_ml_string_length(s) - 1 | 0,_bP_=0;
      if(! (_bQ_ < 0))
       {var i=_bP_;
        for(;;)
         {var c=caml_string_unsafe_get(s,i);
          if(35 <= c)
           var switch$2=92 === c?1:127 <= c?0:2;
          else
           if(32 <= c)
            var switch$2=34 <= c?1:2;
           else
            if(14 <= c)
             var switch$2=0;
            else
             switch(c)
              {case 8:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],98);
                var switch$2=3;
                break;
               case 9:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],116);
                var switch$2=3;
                break;
               case 10:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],110);
                var switch$2=3;
                break;
               case 13:
                caml_bytes_unsafe_set(s$0,n[1],92);
                n[1]++;
                caml_bytes_unsafe_set(s$0,n[1],114);
                var switch$2=3;
                break;
               default:var switch$2=0}
          switch(switch$2)
           {case 0:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             var _bS_=caml_call1(Stdlib_char[1],48 + (c / 100 | 0) | 0);
             caml_bytes_unsafe_set(s$0,n[1],_bS_);
             n[1]++;
             var
              _bT_=
               caml_call1(Stdlib_char[1],48 + ((c / 10 | 0) % 10 | 0) | 0);
             caml_bytes_unsafe_set(s$0,n[1],_bT_);
             n[1]++;
             var _bU_=caml_call1(Stdlib_char[1],48 + (c % 10 | 0) | 0);
             caml_bytes_unsafe_set(s$0,n[1],_bU_);
             break;
            case 1:
             caml_bytes_unsafe_set(s$0,n[1],92);
             n[1]++;
             caml_bytes_unsafe_set(s$0,n[1],c);
             break;
            case 2:caml_bytes_unsafe_set(s$0,n[1],c);break
            }
          n[1]++;
          var _bR_=i + 1 | 0;
          if(_bQ_ !== i){var i=_bR_;continue}
          break}}
      return caml_call1(Stdlib_bytesLabels[45],s$0)}
    function esc_str(str)
     {var
       src=escaped(str),
       len=caml_ml_string_length(src),
       dst=caml_create_bytes(len + 2 | 0);
      caml_call5(Stdlib_bytes[12],src,0,dst,1,len);
      caml_bytes_unsafe_set(dst,0,34);
      caml_bytes_unsafe_set(dst,len + 1 | 0,34);
      return caml_call1(Stdlib_bytesLabels[45],dst)}
    function index_of_newline(str,start)
     {try
       {var _bL_=[0,caml_call3(Stdlib_stringLabels[18],str,start,10)];
        return _bL_}
      catch(_bM_)
       {_bM_ = caml_wrap_exception(_bM_);
        if(_bM_ === Not_found)return 0;
        throw _bM_}}
    function mach_maybe_esc_str(str){return must_escape(str)?esc_str(str):str}
    function pp_hum_indent(indent,ppf,param)
     {if(0 === param[0])
       {var str=param[1];
        if(must_escape(str))
         {var match=index_of_newline(str,0);
          if(match)
           var
            index=match[1],
            _bH_=(index + 1 | 0) === caml_ml_string_length(str)?1:0;
          else
           var _bH_=1;
          if(_bH_)
           {var _bI_=esc_str(str);
            return caml_call2(Stdlib_format[13],ppf,_bI_)}
          caml_call2(Stdlib_format[1],ppf,0);
          caml_call2(Stdlib_format[13],ppf,cst$0);
          var index$0=0;
          for(;;)
           {var end_pos_opt=index_of_newline(str,index$0);
            if(end_pos_opt)
             var end_pos=end_pos_opt[1],end_pos$0=end_pos;
            else
             var end_pos$0=caml_ml_string_length(str);
            var
             next_line=
              caml_call3
               (Stdlib_stringLabels[4],str,index$0,end_pos$0 - index$0 | 0),
             _bJ_=escaped(next_line);
            caml_call2(Stdlib_format[13],ppf,_bJ_);
            if(end_pos_opt)
             {var newline_index=end_pos_opt[1];
              caml_call2(Stdlib_format[13],ppf,cst);
              caml_call2(Stdlib_format[31],ppf,0);
              caml_call2(Stdlib_format[13],ppf,cst_n);
              var index$1=newline_index + 1 | 0,index$0=index$1;
              continue}
            caml_call2(Stdlib_format[13],ppf,cst$1);
            return caml_call2(Stdlib_format[3],ppf,0)}}
        return caml_call2(Stdlib_format[13],ppf,str)}
      var _bK_=param[1];
      if(_bK_)
       {var t=_bK_[2],h=_bK_[1];
        caml_call2(Stdlib_format[1],ppf,indent);
        caml_call2(Stdlib_format[13],ppf,cst$2);
        pp_hum_indent(indent,ppf,h);
        var param$0=t;
        for(;;)
         {if(param$0)
           {var t$0=param$0[2],h$0=param$0[1];
            caml_call2(Stdlib_format[25],ppf,0);
            pp_hum_indent(indent,ppf,h$0);
            var param$0=t$0;
            continue}
          caml_call2(Stdlib_format[13],ppf,cst$4);
          return caml_call2(Stdlib_format[3],ppf,0)}}
      return caml_call2(Stdlib_format[13],ppf,cst$3)}
    function pp_mach_internal(may_need_space,ppf,param)
     {if(0 === param[0])
       {var
         str=param[1],
         str$0=mach_maybe_esc_str(str),
         new_may_need_space=str$0 === str?1:0,
         new_may_need_space$0=may_need_space?new_may_need_space:may_need_space;
        if(new_may_need_space$0)caml_call2(Stdlib_format[13],ppf,cst$5);
        caml_call2(Stdlib_format[13],ppf,str$0);
        return new_may_need_space}
      var _bG_=param[1];
      if(_bG_)
       {var t=_bG_[2],h=_bG_[1];
        caml_call2(Stdlib_format[13],ppf,cst$6);
        var
         may_need_space$0=pp_mach_internal(0,ppf,h),
         may_need_space$1=may_need_space$0,
         param$0=t;
        for(;;)
         {if(param$0)
           {var
             t$0=param$0[2],
             h$0=param$0[1],
             may_need_space$2=pp_mach_internal(may_need_space$1,ppf,h$0),
             may_need_space$1=may_need_space$2,
             param$0=t$0;
            continue}
          caml_call2(Stdlib_format[13],ppf,cst$8);
          return 0}}
      caml_call2(Stdlib_format[13],ppf,cst$7);
      return 0}
    function pp_hum(ppf,sexp)
     {return pp_hum_indent(default_indent[1],ppf,sexp)}
    function pp(ppf,sexp){pp_mach_internal(0,ppf,sexp);return 0}
    function size_loop(acc,param)
     {var _bE_=acc[2],_bF_=acc[1];
      if(0 === param[0])
       {var str=param[1];
        return [0,_bF_ + 1 | 0,_bE_ + caml_ml_string_length(str) | 0]}
      var lst=param[1];
      return caml_call3(Stdlib_listLabels[20],size_loop,acc,lst)}
    function size(sexp){return size_loop(_a_,sexp)}
    function to_buffer_hum(buf,opt,sexp)
     {if(opt)var sth=opt[1],indent=sth;else var indent=default_indent[1];
      var ppf=caml_call1(Stdlib_format[98],buf);
      function _bB_(_bC_,_bD_){return pp_hum_indent(indent,_bC_,_bD_)}
      return caml_call4(Stdlib_format[112],ppf,_b_,_bB_,sexp)}
    function to_buffer_mach(buf,sexp)
     {function loop(may_need_space,param)
       {if(0 === param[0])
         {var
           str=param[1],
           str$0=mach_maybe_esc_str(str),
           new_may_need_space=str$0 === str?1:0,
           new_may_need_space$0=
            may_need_space?new_may_need_space:may_need_space;
          if(new_may_need_space$0)caml_call2(Stdlib_buffer[10],buf,32);
          caml_call2(Stdlib_buffer[14],buf,str$0);
          return new_may_need_space}
        var _bA_=param[1];
        if(_bA_)
         {var t=_bA_[2],h=_bA_[1];
          caml_call2(Stdlib_buffer[10],buf,40);
          var
           may_need_space$0=loop(0,h),
           may_need_space$1=may_need_space$0,
           param$0=t;
          for(;;)
           {if(param$0)
             {var
               t$0=param$0[2],
               h$0=param$0[1],
               may_need_space$2=loop(may_need_space$1,h$0),
               may_need_space$1=may_need_space$2,
               param$0=t$0;
              continue}
            caml_call2(Stdlib_buffer[10],buf,41);
            return 0}}
        caml_call2(Stdlib_buffer[14],buf,cst$9);
        return 0}
      loop(0,sexp);
      return 0}
    function to_buffer_gen(buf,add_char,add_string,sexp)
     {function loop(may_need_space,param)
       {if(0 === param[0])
         {var
           str=param[1],
           str$0=mach_maybe_esc_str(str),
           new_may_need_space=str$0 === str?1:0,
           new_may_need_space$0=
            may_need_space?new_may_need_space:may_need_space;
          if(new_may_need_space$0)caml_call2(add_char,buf,32);
          caml_call2(add_string,buf,str$0);
          return new_may_need_space}
        var _bz_=param[1];
        if(_bz_)
         {var t=_bz_[2],h=_bz_[1];
          caml_call2(add_char,buf,40);
          var
           may_need_space$0=loop(0,h),
           may_need_space$1=may_need_space$0,
           param$0=t;
          for(;;)
           {if(param$0)
             {var
               t$0=param$0[2],
               h$0=param$0[1],
               may_need_space$2=loop(may_need_space$1,h$0),
               may_need_space$1=may_need_space$2,
               param$0=t$0;
              continue}
            caml_call2(add_char,buf,41);
            return 0}}
        caml_call2(add_string,buf,cst$10);
        return 0}
      loop(0,sexp);
      return 0}
    function buffer(param){return caml_call1(Stdlib_buffer[1],1024)}
    function to_string_hum(indent,sexp)
     {if(0 === sexp[0])
       {var str=sexp[1],match=index_of_newline(str,0),_by_=match?0:1;
        if(_by_)return mach_maybe_esc_str(str)}
      var buf=buffer(0);
      to_buffer_hum(buf,indent,sexp);
      return caml_call1(Stdlib_buffer[2],buf)}
    function to_string(sexp)
     {if(0 === sexp[0]){var str=sexp[1];return mach_maybe_esc_str(str)}
      var buf=buffer(0);
      to_buffer_mach(buf,sexp);
      return caml_call1(Stdlib_buffer[2],buf)}
    var of_float_style=[0,1009018843],of_int_style=[0,1009018843];
    function message(name,fields)
     {function conv_fields(param)
       {if(param)
         {var rest=param[2],match=param[1],fsexp=match[2],fname=match[1];
          return caml_string_notequal(fname,cst$11)
                  ?[0,[1,[0,[0,fname],[0,fsexp,0]]],conv_fields(rest)]
                  :[0,fsexp,conv_fields(rest)]}
        return 0}
      return [1,[0,[0,name],conv_fields(fields)]]}
    var
     Sexplib0_Sexp=
      [0,
       t_of_sexp,
       sexp_of_t,
       equal,
       compare,
       Not_found_s,
       Of_sexp_error,
       message,
       default_indent,
       pp_hum,
       pp_hum_indent,
       pp,
       pp,
       to_string_hum,
       to_string,
       to_string,
       of_float_style,
       of_int_style,
       [0,
        size,
        buffer,
        to_buffer_mach,
        to_buffer_hum,
        to_buffer_mach,
        to_buffer_gen,
        mach_maybe_esc_str,
        must_escape,
        esc_str]];
    caml_register_global(146,Sexplib0_Sexp,"Sexplib0__Sexp");
    var
     default_string_of_float=
      [0,
       function(x)
        {var y=caml_format_float(cst_15G,x);
         return caml_float_of_string(y) == x?y:caml_format_float(cst_17G,x)}],
     read_old_option_format=[0,1],
     write_old_option_format=[0,1];
    function list_map(f,l)
     {var _bx_=caml_call2(Stdlib_listLabels[19],f,l);
      return caml_call1(Stdlib_listLabels[9],_bx_)}
    function sexp_of_unit(param){return _c_}
    function sexp_of_bool(b){return [0,caml_call1(Stdlib[19],b)]}
    function sexp_of_string(str){return [0,str]}
    function sexp_of_bytes(bytes)
     {return [0,caml_call1(Stdlib_bytesLabels[6],bytes)]}
    function sexp_of_char(c)
     {return [0,caml_call2(Stdlib_stringLabels[1],1,c)]}
    function sexp_of_int(n){return [0,caml_call1(Stdlib[22],n)]}
    function sexp_of_float(n)
     {return [0,caml_call1(default_string_of_float[1],n)]}
    function sexp_of_int32(n){return [0,caml_call1(Stdlib_int32[11],n)]}
    function sexp_of_int64(n){return [0,caml_call1(Stdlib_int64[11],n)]}
    function sexp_of_nativeint(n)
     {return [0,caml_call1(Stdlib_nativeint[12],n)]}
    function sexp_of_ref(sexp_of_a,rf){return caml_call1(sexp_of_a,rf[1])}
    function sexp_of_lazy_t(sexp_of_a,lv)
     {var
       _bv_=runtime.caml_obj_tag(lv),
       _bw_=
        250 === _bv_?lv[1]:246 === _bv_?caml_call1(CamlinternalLazy[2],lv):lv;
      return caml_call1(sexp_of_a,_bw_)}
    function sexp_of_option(sexp_of_a,param)
     {if(param)
       {var x=param[1];
        return write_old_option_format[1]
                ?[1,[0,caml_call1(sexp_of_a,x),0]]
                :[1,[0,_d_,[0,caml_call1(sexp_of_a,x),0]]]}
      return write_old_option_format[1]?_e_:_f_}
    function sexp_of_pair(sexp_of_a,sexp_of_b,param)
     {var b=param[2],a=param[1],_bu_=[0,caml_call1(sexp_of_b,b),0];
      return [1,[0,caml_call1(sexp_of_a,a),_bu_]]}
    function sexp_of_triple(sexp_of_a,sexp_of_b,sexp_of_c,param)
     {var
       c=param[3],
       b=param[2],
       a=param[1],
       _bs_=[0,caml_call1(sexp_of_c,c),0],
       _bt_=[0,caml_call1(sexp_of_b,b),_bs_];
      return [1,[0,caml_call1(sexp_of_a,a),_bt_]]}
    function sexp_of_list(sexp_of_a,lst)
     {var _br_=caml_call2(Stdlib_listLabels[19],sexp_of_a,lst);
      return [1,caml_call1(Stdlib_listLabels[9],_br_)]}
    function sexp_of_array(sexp_of_a,ar)
     {var lst_ref=[0,0],_bo_=ar.length - 1 - 1 | 0;
      if(! (_bo_ < 0))
       {var i=_bo_;
        for(;;)
         {var _bp_=lst_ref[1];
          lst_ref[1]
          =
          [0,caml_call1(sexp_of_a,caml_check_bound(ar,i)[i + 1]),_bp_];
          var _bq_=i - 1 | 0;
          if(0 !== i){var i=_bq_;continue}
          break}}
      return [1,lst_ref[1]]}
    function sexp_of_hashtbl(sexp_of_key,sexp_of_val,htbl)
     {function coll(k,v,acc)
       {var _bn_=[0,caml_call1(sexp_of_val,v),0];
        return [0,[1,[0,caml_call1(sexp_of_key,k),_bn_]],acc]}
      return [1,caml_call3(Stdlib_moreLabels[1][14],coll,htbl,0)]}
    function sexp_of_opaque(param){return _g_}
    function sexp_of_fun(param){return _h_}
    var
     compare$0=runtime.caml_int_compare,
     Int=[0,compare$0],
     Exn_ids=caml_call1(Stdlib_moreLabels[2][1],Int),
     exn_id_map=[0,Exn_ids[1]];
    function clean_up_handler(slot)
     {for(;;)
       {var
         id=caml_call1(Stdlib_obj[23],slot),
         old_exn_id_map=exn_id_map[1],
         new_exn_id_map=caml_call2(Exn_ids[7],id,old_exn_id_map);
        if(exn_id_map[1] !== old_exn_id_map)continue;
        exn_id_map[1] = new_exn_id_map;
        return 0}}
    function add(opt,extension_constructor,sexp_of_exn)
     {if(opt)var sth=opt[1],finalise=sth;else var finalise=1;
      var id=caml_call1(Stdlib_obj[23],extension_constructor);
      function loop(param)
       {for(;;)
         {var
           old_exn_id_map=exn_id_map[1],
           ephe=caml_call1(Stdlib_ephemeron[1][1],0);
          caml_call2(Stdlib_ephemeron[1][10],ephe,sexp_of_exn);
          caml_call2(Stdlib_ephemeron[1][4],ephe,extension_constructor);
          var new_exn_id_map=caml_call3(Exn_ids[4],id,ephe,old_exn_id_map);
          if(exn_id_map[1] !== old_exn_id_map)continue;
          exn_id_map[1] = new_exn_id_map;
          if(finalise)
           try
            {var
              _bl_=
               caml_call2(Stdlib_gc[3],clean_up_handler,extension_constructor);
             return _bl_}
           catch(_bm_)
            {_bm_ = caml_wrap_exception(_bm_);
             if(_bm_[1] === Invalid_argument)return 0;
             throw _bm_}
          return finalise}}
      return loop(0)}
    function add_auto(finalise,exn,sexp_of_exn)
     {return add(finalise,caml_call1(Stdlib_obj[21],exn),sexp_of_exn)}
    function find_auto(exn)
     {var
       _bj_=caml_call1(Stdlib_obj[21],exn),
       id=caml_call1(Stdlib_obj[23],_bj_);
      try
       {var ephe=caml_call2(Exn_ids[27],id,exn_id_map[1])}
      catch(_bk_)
       {_bk_ = caml_wrap_exception(_bk_);
        if(_bk_ === Not_found)return 0;
        throw _bk_}
      var match=caml_call1(Stdlib_ephemeron[1][8],ephe);
      if(match)
       {var sexp_of_exn=match[1];return [0,caml_call1(sexp_of_exn,exn)]}
      return 0}
    function size$0(param)
     {var _bg_=0,_bh_=exn_id_map[1];
      function _bi_(param,ephe,acc)
       {var match=caml_call1(Stdlib_ephemeron[1][8],ephe);
        return match?acc + 1 | 0:acc}
      return caml_call3(Exn_ids[13],_bi_,_bh_,_bg_)}
    var For_unit_tests_only=[0,size$0];
    function sexp_of_exn_opt(exn){return find_auto(exn)}
    function sexp_of_exn(exn)
     {var match=sexp_of_exn_opt(exn);
      if(match){var sexp=match[1];return sexp}
      return [1,[0,[0,caml_call1(Stdlib_printexc[1],exn)],0]]}
    function exn_to_string(e){return to_string_hum(0,sexp_of_exn(e))}
    function _i_(exn)
     {var match=sexp_of_exn_opt(exn);
      if(match){var sexp=match[1];return [0,to_string_hum(_j_,sexp)]}
      return 0}
    caml_call1(Stdlib_printexc[8],_i_);
    var record_check_extra_fields=[0,1];
    function of_sexp_error_exn(exc,sexp){throw [0,Of_sexp_error,exc,sexp]}
    function of_sexp_error(what,sexp)
     {throw [0,Of_sexp_error,[0,Failure,what],sexp]}
    function unit_of_sexp(sexp)
     {if(1 === sexp[0])if(! sexp[1])return 0;
      return of_sexp_error(cst_unit_of_sexp_empty_list_needed,sexp)}
    function bool_of_sexp(sexp)
     {if(0 === sexp[0])
       {var _bf_=sexp[1];
        if(caml_string_notequal(_bf_,cst_False))
         {if(caml_string_notequal(_bf_,cst_True))
           if(caml_string_notequal(_bf_,cst_false))
            {if(caml_string_notequal(_bf_,cst_true))
              return of_sexp_error(cst_bool_of_sexp_unknown_string,sexp);
             var switch$0=0}
           else
            var switch$0=1;
          else
           var switch$0=0;
          if(! switch$0)return 1}
        return 0}
      return of_sexp_error(cst_bool_of_sexp_atom_needed,sexp)}
    function string_of_sexp(sexp)
     {if(0 === sexp[0]){var str=sexp[1];return str}
      return of_sexp_error(cst_string_of_sexp_atom_needed,sexp)}
    function bytes_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];return caml_call1(Stdlib_bytesLabels[5],str)}
      return of_sexp_error(cst_bytes_of_sexp_atom_needed,sexp)}
    function char_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        if(1 !== caml_ml_string_length(str))
         of_sexp_error
          (cst_char_of_sexp_atom_string_must_contain_one_character_only,sexp);
        return caml_string_get(str,0)}
      return of_sexp_error(cst_char_of_sexp_atom_needed,sexp)}
    function int_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _be_=caml_int_of_string(str);return _be_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _bd_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[17],cst_int_of_sexp,_bd_),sexp)}}
      return of_sexp_error(cst_int_of_sexp_atom_needed,sexp)}
    function float_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _bc_=caml_float_of_string(str);return _bc_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _bb_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[17],cst_float_of_sexp,_bb_),sexp)}}
      return of_sexp_error(cst_float_of_sexp_atom_needed,sexp)}
    function int32_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _ba_=caml_int_of_string(str);return _ba_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _a$_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[17],cst_int32_of_sexp,_a$_),sexp)}}
      return of_sexp_error(cst_int32_of_sexp_atom_needed,sexp)}
    function int64_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _a__=runtime.caml_int64_of_string(str);return _a__}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _a9_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[17],cst_int64_of_sexp,_a9_),sexp)}}
      return of_sexp_error(cst_int64_of_sexp_atom_needed,sexp)}
    function nativeint_of_sexp(sexp)
     {if(0 === sexp[0])
       {var str=sexp[1];
        try
         {var _a8_=caml_int_of_string(str);return _a8_}
        catch(exc)
         {exc = caml_wrap_exception(exc);
          var _a7_=exn_to_string(exc);
          return of_sexp_error
                  (caml_call2(Stdlib[17],cst_nativeint_of_sexp,_a7_),sexp)}}
      return of_sexp_error(cst_nativeint_of_sexp_atom_needed,sexp)}
    function ref_of_sexp(a_of_sexp,sexp)
     {return [0,caml_call1(a_of_sexp,sexp)]}
    function lazy_t_of_sexp(a_of_sexp,sexp)
     {var _a6_=caml_call1(a_of_sexp,sexp);
      return caml_call1(Stdlib_lazy[4],_a6_)}
    function option_of_sexp(a_of_sexp,sexp)
     {if(read_old_option_format[1])
       {if(0 === sexp[0])
         {var _aW_=sexp[1];
          if(caml_string_notequal(_aW_,cst_None))
           if(caml_string_notequal(_aW_,cst_none))
            return of_sexp_error
                    (cst_option_of_sexp_only_none_can_be_atom,sexp)}
        else
         {var _aX_=sexp[1];
          if(_aX_)
           {var _aY_=_aX_[1];
            if(_aX_[2])
             {if(0 === _aY_[0])
               {var _aZ_=_aY_[1];
                if(caml_string_notequal(_aZ_,cst_Some))
                 if(caml_string_notequal(_aZ_,cst_some))
                  var switch$0=0,switch$1=0;
                 else
                  var switch$1=1;
                else
                 var switch$1=1;
                if(switch$1)
                 {var _a0_=_aX_[2];
                  if(_a0_[2])var switch$0=0;else var el=_a0_[1],switch$0=1}}
              else
               var switch$0=0;
              if(! switch$0)
               return of_sexp_error
                       (cst_option_of_sexp_list_must_represent_optional_value,sexp)}
            else
             var el=_aY_;
            return [0,caml_call1(a_of_sexp,el)]}}
        return 0}
      if(0 === sexp[0])
       {var _a1_=sexp[1];
        if(caml_string_notequal(_a1_,cst_None$0))
         if(caml_string_notequal(_a1_,cst_none$0))
          return of_sexp_error
                  (cst_option_of_sexp_only_none_can_be_atom$0,sexp);
        return 0}
      var _a2_=sexp[1];
      if(_a2_)
       {var _a3_=_a2_[1];
        if(0 === _a3_[0])
         {var
           _a4_=_a3_[1],
           switch$2=
            caml_string_notequal(_a4_,cst_Some$0)
             ?caml_string_notequal(_a4_,cst_some$0)?1:0
             :0;
          if(! switch$2)
           {var _a5_=_a2_[2];
            if(_a5_)
             if(! _a5_[2])
              {var el$0=_a5_[1];return [0,caml_call1(a_of_sexp,el$0)]}}}}
      return of_sexp_error(cst_option_of_sexp_list_must_be_some_el,sexp)}
    function pair_of_sexp(a_of_sexp,b_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_pair_of_sexp_list_needed,sexp);
      var _aU_=sexp[1];
      if(_aU_)
       {var _aV_=_aU_[2];
        if(_aV_)
         if(! _aV_[2])
          {var
            b_sexp=_aV_[1],
            a_sexp=_aU_[1],
            a=caml_call1(a_of_sexp,a_sexp),
            b=caml_call1(b_of_sexp,b_sexp);
           return [0,a,b]}}
      return of_sexp_error
              (cst_pair_of_sexp_list_must_contain_exactly_two_elements_only,
               sexp)}
    function triple_of_sexp(a_of_sexp,b_of_sexp,c_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_triple_of_sexp_list_needed,sexp);
      var _aR_=sexp[1];
      if(_aR_)
       {var _aS_=_aR_[2];
        if(_aS_)
         {var _aT_=_aS_[2];
          if(_aT_)
           if(! _aT_[2])
            {var
              c_sexp=_aT_[1],
              b_sexp=_aS_[1],
              a_sexp=_aR_[1],
              a=caml_call1(a_of_sexp,a_sexp),
              b=caml_call1(b_of_sexp,b_sexp),
              c=caml_call1(c_of_sexp,c_sexp);
             return [0,a,b,c]}}}
      return of_sexp_error
              (cst_triple_of_sexp_list_must_contain_exactly_three_elements_only,
               sexp)}
    function list_of_sexp(a_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_list_of_sexp_list_needed,sexp);
      var lst=sexp[1],rev_lst=caml_call2(Stdlib_listLabels[19],a_of_sexp,lst);
      return caml_call1(Stdlib_listLabels[9],rev_lst)}
    function array_of_sexp(a_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_array_of_sexp_list_needed,sexp);
      var _aP_=sexp[1];
      if(_aP_)
       {var
         t=_aP_[2],
         h=_aP_[1],
         len=caml_call1(Stdlib_listLabels[1],t) + 1 | 0,
         res=runtime.caml_make_vect(len,caml_call1(a_of_sexp,h)),
         i=1,
         param=t;
        for(;;)
         {if(param)
           {var t$0=param[2],h$0=param[1],_aQ_=caml_call1(a_of_sexp,h$0);
            caml_check_bound(res,i)[i + 1] = _aQ_;
            var i$0=i + 1 | 0,i=i$0,param=t$0;
            continue}
          return res}}
      return [0]}
    function hashtbl_of_sexp(key_of_sexp,val_of_sexp,sexp)
     {if(0 === sexp[0])
       return of_sexp_error(cst_hashtbl_of_sexp_list_needed,sexp);
      var lst=sexp[1],htbl=caml_call2(Stdlib_moreLabels[1][1],0,0);
      function act(param)
       {if(1 === param[0])
         {var _aL_=param[1];
          if(_aL_)
           {var _aM_=_aL_[2];
            if(_aM_)
             if(! _aM_[2])
              {var
                v_sexp=_aM_[1],
                k_sexp=_aL_[1],
                _aN_=caml_call1(val_of_sexp,v_sexp),
                _aO_=caml_call1(key_of_sexp,k_sexp);
               return caml_call3(Stdlib_moreLabels[1][5],htbl,_aO_,_aN_)}}}
        return of_sexp_error(cst_hashtbl_of_sexp_tuple_list_needed,sexp)}
      caml_call2(Stdlib_listLabels[15],act,lst);
      return htbl}
    function opaque_of_sexp(sexp)
     {return of_sexp_error
              (cst_opaque_of_sexp_cannot_convert_opaque_values,sexp)}
    function fun_of_sexp(sexp)
     {return of_sexp_error
              (cst_fun_of_sexp_cannot_convert_function_values,sexp)}
    function get_flc_error(name,param)
     {var chr=param[3],line=param[2],file=param[1];
      return [0,caml_call5(Stdlib_printf[4],_k_,name,file,line,chr)]}
    var
     _l_=0,
     _o_=
      [0,
       [0,
        Of_sexp_error,
        function(param)
         {if(param[1] === Of_sexp_error)
           {var sexp=param[3],exc=param[2];
            return [1,[0,_m_,[0,sexp_of_exn(exc),[0,sexp,0]]]]}
          throw [0,Assert_failure,_n_]}],
       _l_];
    function _p_(param)
     {if(param === Stdlib_sys[44])return _q_;throw [0,Assert_failure,_r_]}
    var _s_=[0,[0,Stdlib_sys[44],_p_],_o_];
    function _t_(param)
     {if(param[1] === Stdlib_stream[2])
       {var arg=param[2];return [1,[0,_u_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_v_]}
    var _w_=[0,[0,Stdlib_stream[2],_t_],_s_];
    function _x_(param)
     {if(param === Stdlib_stream[1])return _y_;throw [0,Assert_failure,_z_]}
    var _A_=[0,[0,Stdlib_stream[1],_x_],_w_];
    function _B_(param)
     {if(param === Stdlib_stack[1])return _C_;throw [0,Assert_failure,_D_]}
    var _E_=[0,[0,Stdlib_stack[1],_B_],_A_];
    function _F_(param)
     {if(param[1] === Stdlib_scanf[2])
       {var arg=param[2];return [1,[0,_G_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_H_]}
    var _I_=[0,[0,Stdlib_scanf[2],_F_],_E_];
    function _J_(param)
     {if(param === Stdlib_queue[1])return _K_;throw [0,Assert_failure,_L_]}
    var _M_=[0,[0,Stdlib_queue[1],_J_],_I_];
    function _N_(param)
     {if(param === Stdlib_parsing[10])return _O_;throw [0,Assert_failure,_P_]}
    var _Q_=[0,[0,Stdlib_parsing[10],_N_],_M_];
    function _R_(param)
     {if(param === Stdlib_lazy[1])return _S_;throw [0,Assert_failure,_T_]}
    var _U_=[0,[0,Stdlib_lazy[1],_R_],_Q_];
    function _V_(param)
     {if(param[1] === Stdlib_arg[8])
       {var arg=param[2];return [1,[0,_W_,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_X_]}
    var _Y_=[0,[0,Stdlib_arg[8],_V_],_U_];
    function _Z_(param)
     {if(param[1] === Stdlib_arg[7])
       {var arg=param[2];return [1,[0,___,[0,[0,arg],0]]]}
      throw [0,Assert_failure,_$_]}
    var
     _aa_=[0,[0,Stdlib_arg[7],_Z_],_Y_],
     _ad_=
      [0,
       [0,
        Sys_error,
        function(param)
         {if(param[1] === Sys_error)
           {var arg=param[2];return [1,[0,_ab_,[0,[0,arg],0]]]}
          throw [0,Assert_failure,_ac_]}],
       _aa_],
     _ag_=
      [0,
       [0,
        Not_found_s,
        function(param)
         {if(param[1] === Not_found_s)
           {var arg=param[2];return [1,[0,_ae_,[0,arg,0]]]}
          throw [0,Assert_failure,_af_]}],
       _ad_],
     _ai_=
      [0,
       [0,
        Match_failure,
        function(param)
         {if(param[1] === Match_failure)
           {var arg=param[2];return get_flc_error(cst_Match_failure,arg)}
          throw [0,Assert_failure,_ah_]}],
       _ag_],
     _al_=
      [0,
       [0,
        Invalid_argument,
        function(param)
         {if(param[1] === Invalid_argument)
           {var arg=param[2];return [1,[0,_aj_,[0,[0,arg],0]]]}
          throw [0,Assert_failure,_ak_]}],
       _ai_],
     _ao_=
      [0,
       [0,
        Not_found,
        function(param)
         {if(param === Not_found)return _am_;throw [0,Assert_failure,_an_]}],
       _al_],
     _ar_=
      [0,
       [0,
        Failure,
        function(param)
         {if(param[1] === Failure)
           {var arg=param[2];return [1,[0,_ap_,[0,[0,arg],0]]]}
          throw [0,Assert_failure,_aq_]}],
       _ao_],
     _au_=
      [0,
       [0,
        End_of_file,
        function(param)
         {if(param === End_of_file)return _as_;throw [0,Assert_failure,_at_]}],
       _ar_];
    function _av_(param)
     {if(param === Stdlib[4])return _aw_;throw [0,Assert_failure,_ax_]}
    var
     _ay_=[0,[0,Stdlib[4],_av_],_au_],
     _aA_=
      [0,
       [0,
        Assert_failure,
        function(param)
         {if(param[1] === Assert_failure)
           {var arg=param[2];return get_flc_error(cst_Assert_failure,arg)}
          throw [0,Assert_failure,_az_]}],
       _ay_];
    function _aB_(param)
     {var handler=param[2],extension_constructor=param[1];
      return add(_aC_,extension_constructor,handler)}
    caml_call2(Stdlib_listLabels[15],_aB_,_aA_);
    var
     Sexplib0_Sexp_conv=
      [0,
       default_string_of_float,
       write_old_option_format,
       read_old_option_format,
       list_map,
       sexp_of_unit,
       sexp_of_bool,
       sexp_of_string,
       sexp_of_bytes,
       sexp_of_char,
       sexp_of_int,
       sexp_of_float,
       sexp_of_int32,
       sexp_of_int64,
       sexp_of_nativeint,
       sexp_of_ref,
       sexp_of_lazy_t,
       sexp_of_option,
       sexp_of_pair,
       sexp_of_triple,
       sexp_of_list,
       sexp_of_array,
       sexp_of_hashtbl,
       sexp_of_opaque,
       sexp_of_fun,
       Of_sexp_error,
       record_check_extra_fields,
       of_sexp_error,
       of_sexp_error_exn,
       unit_of_sexp,
       bool_of_sexp,
       string_of_sexp,
       bytes_of_sexp,
       char_of_sexp,
       int_of_sexp,
       float_of_sexp,
       int32_of_sexp,
       int64_of_sexp,
       nativeint_of_sexp,
       ref_of_sexp,
       lazy_t_of_sexp,
       option_of_sexp,
       pair_of_sexp,
       triple_of_sexp,
       list_of_sexp,
       array_of_sexp,
       hashtbl_of_sexp,
       opaque_of_sexp,
       fun_of_sexp,
       sexp_of_exn,
       sexp_of_exn_opt,
       [0,add_auto,add,For_unit_tests_only]];
    caml_register_global(172,Sexplib0_Sexp_conv,"Sexplib0__Sexp_conv");
    function tuple_of_size_n_expected(loc,n,sexp)
     {return of_sexp_error(caml_call3(Stdlib_printf[4],_aD_,loc,n),sexp)}
    function stag_no_args(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],loc,cst_of_sexp_sum_tag_does_not_take_arguments),
               sexp)}
    function stag_incorrect_n_args(loc,tag,sexp)
     {var msg=caml_call3(Stdlib_printf[4],_aE_,loc,tag);
      return of_sexp_error(msg,sexp)}
    function stag_takes_args(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],
                 loc,
                 cst_of_sexp_sum_tag_must_be_a_structured_value),
               sexp)}
    function nested_list_invalid_sum(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],loc,cst_of_sexp_a_nested_list_is_an_invalid_sum),
               sexp)}
    function empty_list_invalid_sum(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],loc,cst_of_sexp_the_empty_list_is_an_invalid_sum),
               sexp)}
    function unexpected_stag(loc,sexp)
     {return of_sexp_error
              (caml_call2(Stdlib[17],loc,cst_of_sexp_unexpected_sum_tag),sexp)}
    function record_only_pairs_expected(loc,sexp)
     {var
       msg=
        caml_call2
         (Stdlib[17],
          loc,
          cst_of_sexp_record_conversion_only_pairs_expected_their_first_element_must_be_an_atom);
      return of_sexp_error(msg,sexp)}
    function record_superfluous_fields(what,loc,rev_fld_names,sexp)
     {var
       _aK_=caml_call1(Stdlib_listLabels[9],rev_fld_names),
       fld_names_str=caml_call2(Stdlib_stringLabels[7],cst$12,_aK_),
       msg=caml_call4(Stdlib_printf[4],_aF_,loc,what,fld_names_str);
      return of_sexp_error(msg,sexp)}
    function record_duplicate_fields(loc,rev_fld_names,sexp)
     {return record_superfluous_fields
              (cst_duplicate_fields,loc,rev_fld_names,sexp)}
    function record_extra_fields(loc,rev_fld_names,sexp)
     {return record_superfluous_fields
              (cst_extra_fields,loc,rev_fld_names,sexp)}
    function record_get_undefined_loop(fields,param)
     {var fields$0=fields,param$0=param;
      for(;;)
       {if(param$0)
         {var _aI_=param$0[1];
          if(0 === _aI_[1]){var param$1=param$0[2],param$0=param$1;continue}
          var
           param$2=param$0[2],
           field=_aI_[2],
           fields$1=[0,field,fields$0],
           fields$0=fields$1,
           param$0=param$2;
          continue}
        var _aJ_=caml_call1(Stdlib_listLabels[9],fields$0);
        return caml_call2(Stdlib_stringLabels[7],cst$13,_aJ_)}}
    function record_undefined_elements(loc,sexp,lst)
     {var
       undefined$0=record_get_undefined_loop(0,lst),
       msg=caml_call3(Stdlib_printf[4],_aG_,loc,undefined$0);
      return of_sexp_error(msg,sexp)}
    function record_list_instead_atom(loc,sexp)
     {var
       msg=
        caml_call2
         (Stdlib[17],loc,cst_of_sexp_list_instead_of_atom_for_record_expected);
      return of_sexp_error(msg,sexp)}
    function record_poly_field_value(loc,sexp)
     {var
       msg=
        caml_call2
         (Stdlib[17],
          loc,
          cst_of_sexp_cannot_convert_values_of_types_resulting_from_polymorphic_record_fields);
      return of_sexp_error(msg,sexp)}
    var
     No_variant_match=
      [248,cst_Sexplib0_Sexp_conv_error_No_variant_match,caml_fresh_oo_id(0)];
    function no_variant_match(param){throw No_variant_match}
    function no_matching_variant_found(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],loc,cst_of_sexp_no_matching_variant_found),
               sexp)}
    function ptag_no_args(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],
                 loc,
                 cst_of_sexp_polymorphic_variant_does_not_take_arguments),
               sexp)}
    function ptag_incorrect_n_args(loc,cnstr,sexp)
     {var msg=caml_call3(Stdlib_printf[4],_aH_,loc,cnstr);
      return of_sexp_error(msg,sexp)}
    function ptag_takes_args(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],
                 loc,
                 cst_of_sexp_polymorphic_variant_tag_takes_an_argument),
               sexp)}
    function nested_list_invalid_poly_var(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],
                 loc,
                 cst_of_sexp_a_nested_list_is_an_invalid_polymorphic_variant),
               sexp)}
    function empty_list_invalid_poly_var(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],
                 loc,
                 cst_of_sexp_the_empty_list_is_an_invalid_polymorphic_variant),
               sexp)}
    function silly_type(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],loc,cst_of_sexp_trying_to_convert_a_silly_type),
               sexp)}
    function empty_type(loc,sexp)
     {return of_sexp_error
              (caml_call2
                (Stdlib[17],loc,cst_of_sexp_trying_to_convert_an_empty_type),
               sexp)}
    var
     Sexplib0_Sexp_conv_error=
      [0,
       Of_sexp_error,
       tuple_of_size_n_expected,
       stag_no_args,
       stag_incorrect_n_args,
       stag_takes_args,
       nested_list_invalid_sum,
       empty_list_invalid_sum,
       unexpected_stag,
       record_only_pairs_expected,
       record_superfluous_fields,
       record_duplicate_fields,
       record_extra_fields,
       record_get_undefined_loop,
       record_undefined_elements,
       record_list_instead_atom,
       record_poly_field_value,
       No_variant_match,
       no_variant_match,
       no_matching_variant_found,
       ptag_no_args,
       ptag_incorrect_n_args,
       ptag_takes_args,
       nested_list_invalid_poly_var,
       empty_list_invalid_poly_var,
       silly_type,
       empty_type];
    caml_register_global
     (173,Sexplib0_Sexp_conv_error,"Sexplib0__Sexp_conv_error");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzZXhwbGliMC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
