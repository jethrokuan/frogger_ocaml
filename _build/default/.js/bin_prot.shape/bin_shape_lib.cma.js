(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Free_type_variable_Vid=caml_new_string("Free type variable: '%{Vid}"),
     cst_Free_type_variable=caml_new_string("Free type variable: '"),
     cst_apply_incorrect_type_application_arity=
      caml_new_string("apply, incorrect type application arity"),
     cst_top_level=caml_new_string("top-level"),
     cst_impossible_lookup_group_unbound_type_identifier_Tid=
      caml_new_string
       ("impossible: lookup_group, unbound type-identifier: %{Tid}"),
     cst_impossible_lookup_group_unbound_type_identifier=
      caml_new_string("impossible: lookup_group, unbound type-identifier: "),
     cst_Exp=caml_new_string("Exp"),
     cst_exp=caml_new_string("exp"),
     cst_Exp$0=caml_new_string("Exp"),
     cst_exp$0=caml_new_string("exp"),
     cst_annotate$1=caml_new_string("annotate"),
     cst_base$1=caml_new_string("base"),
     cst_tuple$1=caml_new_string("tuple"),
     cst_record$1=caml_new_string("record"),
     cst_variant$1=caml_new_string("variant"),
     cst_poly_variant$1=caml_new_string("poly_variant"),
     cst_application$1=caml_new_string("application"),
     cst_rec_app$1=caml_new_string("rec_app"),
     cst_var$1=caml_new_string("var"),
     cst_annotate=caml_new_string("annotate"),
     cst_Annotate=caml_new_string("Annotate"),
     cst_Application=caml_new_string("Application"),
     cst_Base=caml_new_string("Base"),
     cst_Poly_variant=caml_new_string("Poly_variant"),
     cst_Rec_app=caml_new_string("Rec_app"),
     cst_Record=caml_new_string("Record"),
     cst_Tuple=caml_new_string("Tuple"),
     cst_Var=caml_new_string("Var"),
     cst_Variant=caml_new_string("Variant"),
     cst_application=caml_new_string("application"),
     cst_base=caml_new_string("base"),
     cst_poly_variant=caml_new_string("poly_variant"),
     cst_rec_app=caml_new_string("rec_app"),
     cst_record=caml_new_string("record"),
     cst_tuple=caml_new_string("tuple"),
     cst_var=caml_new_string("var"),
     cst_variant=caml_new_string("variant"),
     cst_annotate$0=caml_new_string("annotate"),
     cst_Annotate$0=caml_new_string("Annotate"),
     cst_Application$0=caml_new_string("Application"),
     cst_Base$0=caml_new_string("Base"),
     cst_Poly_variant$0=caml_new_string("Poly_variant"),
     cst_Rec_app$0=caml_new_string("Rec_app"),
     cst_Record$0=caml_new_string("Record"),
     cst_Tuple$0=caml_new_string("Tuple"),
     cst_Var$0=caml_new_string("Var"),
     cst_Variant$0=caml_new_string("Variant"),
     cst_application$0=caml_new_string("application"),
     cst_base$0=caml_new_string("base"),
     cst_poly_variant$0=caml_new_string("poly_variant"),
     cst_rec_app$0=caml_new_string("rec_app"),
     cst_record$0=caml_new_string("record"),
     cst_tuple$0=caml_new_string("tuple"),
     cst_var$0=caml_new_string("var"),
     cst_variant$0=caml_new_string("variant"),
     cst_some=caml_new_string("some"),
     cst_none=caml_new_string("none"),
     cst=caml_new_string(""),
     cst_sorted=caml_new_string("sorted"),
     cst_sorted$0=caml_new_string("sorted"),
     cst_Location_s=caml_new_string("%{Location}: %s"),
     tp_loc=caml_new_string("shape/src/bin_shape.ml.Sorted_table.t"),
     tp_loc$0=
      caml_new_string("shape/src/bin_shape.ml.Canonical_exp_constructor.t"),
     tp_loc$1=caml_new_string("shape/src/bin_shape.ml.Canonical_full.Exp1.t0"),
     cst_Bin_shape_lib_Bin_shape_For_typerep_Not_a_tuple=
      caml_new_string("Bin_shape_lib.Bin_shape.For_typerep.Not_a_tuple"),
     Stdlib_listLabels=global_data.Stdlib__listLabels,
     Not_found=global_data.Not_found,
     Stdlib=global_data.Stdlib,
     Stdlib_printf=global_data.Stdlib__printf,
     Base_Ppx_compare_lib=global_data.Base__Ppx_compare_lib,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_stringLabels=global_data.Stdlib__stringLabels,
     Assert_failure=global_data.Assert_failure,
     Stdlib_map=global_data.Stdlib__map,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Base=global_data.Base,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Md5_lib=global_data.Md5_lib,
     Bin_shape_lib=[0,0,0,0];
    caml_register_global(120,Bin_shape_lib,"Bin_shape_lib");
    var
     _a_=Base_Ppx_compare_lib[3],
     compare_bool=_a_[1],
     compare_char=_a_[2],
     compare_float=_a_[3],
     compare=_a_[4],
     compare_int32=_a_[5],
     compare_int64=_a_[6],
     compare_nativeint=_a_[7],
     compare_string=_a_[8],
     compare_unit=_a_[9],
     compare_array=_a_[10],
     compare_list=_a_[11],
     compare_option=_a_[12],
     compare_ref=_a_[13],
     default_string_of_float=Sexplib0_Sexp_conv[1],
     write_old_option_format=Sexplib0_Sexp_conv[2],
     read_old_option_format=Sexplib0_Sexp_conv[3],
     list_map=Sexplib0_Sexp_conv[4],
     sexp_of_unit=Sexplib0_Sexp_conv[5],
     sexp_of_bool=Sexplib0_Sexp_conv[6],
     sexp_of_string=Sexplib0_Sexp_conv[7],
     sexp_of_bytes=Sexplib0_Sexp_conv[8],
     sexp_of_char=Sexplib0_Sexp_conv[9],
     sexp_of_t=Sexplib0_Sexp_conv[10],
     sexp_of_float=Sexplib0_Sexp_conv[11],
     sexp_of_int32=Sexplib0_Sexp_conv[12],
     sexp_of_int64=Sexplib0_Sexp_conv[13],
     sexp_of_nativeint=Sexplib0_Sexp_conv[14],
     sexp_of_ref=Sexplib0_Sexp_conv[15],
     sexp_of_lazy_t=Sexplib0_Sexp_conv[16],
     sexp_of_option=Sexplib0_Sexp_conv[17],
     sexp_of_pair=Sexplib0_Sexp_conv[18],
     sexp_of_triple=Sexplib0_Sexp_conv[19],
     sexp_of_list=Sexplib0_Sexp_conv[20],
     sexp_of_array=Sexplib0_Sexp_conv[21],
     sexp_of_hashtbl=Sexplib0_Sexp_conv[22],
     sexp_of_opaque=Sexplib0_Sexp_conv[23],
     sexp_of_fun=Sexplib0_Sexp_conv[24],
     Of_sexp_error=Sexplib0_Sexp_conv[25],
     record_check_extra_fields=Sexplib0_Sexp_conv[26],
     of_sexp_error=Sexplib0_Sexp_conv[27],
     of_sexp_error_exn=Sexplib0_Sexp_conv[28],
     unit_of_sexp=Sexplib0_Sexp_conv[29],
     bool_of_sexp=Sexplib0_Sexp_conv[30],
     string_of_sexp=Sexplib0_Sexp_conv[31],
     bytes_of_sexp=Sexplib0_Sexp_conv[32],
     char_of_sexp=Sexplib0_Sexp_conv[33],
     int_of_sexp=Sexplib0_Sexp_conv[34],
     float_of_sexp=Sexplib0_Sexp_conv[35],
     int32_of_sexp=Sexplib0_Sexp_conv[36],
     int64_of_sexp=Sexplib0_Sexp_conv[37],
     nativeint_of_sexp=Sexplib0_Sexp_conv[38],
     ref_of_sexp=Sexplib0_Sexp_conv[39],
     lazy_t_of_sexp=Sexplib0_Sexp_conv[40],
     option_of_sexp=Sexplib0_Sexp_conv[41],
     pair_of_sexp=Sexplib0_Sexp_conv[42],
     triple_of_sexp=Sexplib0_Sexp_conv[43],
     list_of_sexp=Sexplib0_Sexp_conv[44],
     array_of_sexp=Sexplib0_Sexp_conv[45],
     hashtbl_of_sexp=Sexplib0_Sexp_conv[46],
     opaque_of_sexp=Sexplib0_Sexp_conv[47],
     fun_of_sexp=Sexplib0_Sexp_conv[48],
     sexp_of_exn=Sexplib0_Sexp_conv[49],
     sexp_of_exn_opt=Sexplib0_Sexp_conv[50],
     Exn_converter=Sexplib0_Sexp_conv[51],
     sort_uniq=Stdlib_list[51],
     Caml=[0,0],
     _P_=[0,caml_new_string("shape/src/bin_shape.ml.For_typerep.Not_a_tuple")],
     _Q_=[0,caml_new_string("shape/src/bin_shape.ml"),768,12],
     _L_=[0,0],
     _M_=
      [0,
       [11,
        caml_new_string
         ("The shape for an inherited type is not described as a polymorphic-variant: "),
        [2,0,0]],
       caml_new_string
        ("The shape for an inherited type is not described as a polymorphic-variant: %s")],
     _A_=[0,caml_new_string("Annotate")],
     _B_=[0,caml_new_string("Base")],
     _C_=[0,caml_new_string("Record")],
     _D_=[0,caml_new_string("Variant")],
     _E_=[0,caml_new_string("Tuple")],
     _F_=[0,caml_new_string("Poly_variant")],
     _G_=[0,caml_new_string("Var")],
     _H_=[0,caml_new_string("Rec_app")],
     _I_=[0,caml_new_string("Top_app")],
     _z_=[0,0],
     _w_=[0,caml_new_string("members")],
     _x_=[0,caml_new_string("loc")],
     _y_=[0,caml_new_string("gid")],
     _u_=[0,caml_new_string("Constr")],
     _v_=[0,caml_new_string("Inherit")],
     _s_=[0,caml_new_string("Exp")],
     _r_=[0,caml_new_string("...")],
     _i_=[0,caml_new_string("Annotate")],
     _j_=[0,caml_new_string("Base")],
     _k_=[0,caml_new_string("Tuple")],
     _l_=[0,caml_new_string("Record")],
     _m_=[0,caml_new_string("Variant")],
     _n_=[0,caml_new_string("Poly_variant")],
     _o_=[0,caml_new_string("Application")],
     _p_=[0,caml_new_string("Rec_app")],
     _q_=[0,caml_new_string("Var")],
     _h_=
      [0,
       [11,
        caml_new_string
         ("Different shapes for duplicated polymorphic constructor: `"),
        [2,0,0]],
       caml_new_string
        ("Different shapes for duplicated polymorphic constructor: `%s")],
     _g_=[0,17724,0],
     _f_=[0,caml_new_string("sorted")],
     _d_=[11,caml_new_string(": "),[2,0,0]],
     _e_=[0,0],
     Sexp=0;
    function failwithf(fmt)
     {function _b1_(s,param){return caml_call1(Stdlib[3],s)}
      return caml_call2(Stdlib_printf[9],_b1_,fmt)}
    var
     Identifiable=[0],
     make=Stdlib_stringLabels[1],
     init=Stdlib_stringLabels[2],
     copy=Stdlib_stringLabels[3],
     sub=Stdlib_stringLabels[4],
     fill=Stdlib_stringLabels[5],
     blit=Stdlib_stringLabels[6],
     concat=Stdlib_stringLabels[7],
     iter=Stdlib_stringLabels[8],
     iteri=Stdlib_stringLabels[9],
     map=Stdlib_stringLabels[10],
     mapi=Stdlib_stringLabels[11],
     trim=Stdlib_stringLabels[12],
     escaped=Stdlib_stringLabels[13],
     index=Stdlib_stringLabels[14],
     index_opt=Stdlib_stringLabels[15],
     rindex=Stdlib_stringLabels[16],
     rindex_opt=Stdlib_stringLabels[17],
     index_from=Stdlib_stringLabels[18],
     index_from_opt=Stdlib_stringLabels[19],
     rindex_from=Stdlib_stringLabels[20],
     rindex_from_opt=Stdlib_stringLabels[21],
     contains=Stdlib_stringLabels[22],
     contains_from=Stdlib_stringLabels[23],
     rcontains_from=Stdlib_stringLabels[24],
     uppercase=Stdlib_stringLabels[25],
     lowercase=Stdlib_stringLabels[26],
     capitalize=Stdlib_stringLabels[27],
     uncapitalize=Stdlib_stringLabels[28],
     uppercase_ascii=Stdlib_stringLabels[29],
     lowercase_ascii=Stdlib_stringLabels[30],
     capitalize_ascii=Stdlib_stringLabels[31],
     uncapitalize_ascii=Stdlib_stringLabels[32],
     compare$0=Stdlib_stringLabels[33],
     equal=Stdlib_stringLabels[34],
     split_on_char=Stdlib_stringLabels[35],
     to_seq=Stdlib_stringLabels[36],
     to_seqi=Stdlib_stringLabels[37],
     of_seq=Stdlib_stringLabels[38],
     _b_=runtime.caml_string_equal;
    function of_string(x){return x}
    function to_string(x){return x}
    var
     include=
      [0,
       make,
       init,
       copy,
       sub,
       fill,
       blit,
       concat,
       iter,
       iteri,
       map,
       mapi,
       trim,
       escaped,
       index,
       index_opt,
       rindex,
       rindex_opt,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       contains,
       contains_from,
       rcontains_from,
       uppercase,
       lowercase,
       capitalize,
       uncapitalize,
       uppercase_ascii,
       lowercase_ascii,
       capitalize_ascii,
       uncapitalize_ascii,
       compare$0,
       equal,
       split_on_char,
       to_seq,
       to_seqi,
       of_seq,
       string_of_sexp,
       sexp_of_string,
       _b_,
       of_string,
       to_string],
     Int=[0,function(_b0_,_bZ_){return _b0_ === _bZ_?1:0}];
    function iter$0(f,param)
     {if(param){var x=param[1];return caml_call1(f,x)}return 0}
    function map$0(f,param)
     {if(param){var x=param[1];return [0,caml_call1(f,x)]}return 0}
    function exists(f,param)
     {if(param){var x=param[1];return caml_call1(f,x)}return 0}
    var
     Option=[0,iter$0,map$0,exists],
     length=Stdlib_listLabels[1],
     hd=Stdlib_listLabels[2],
     compare_lengths=Stdlib_listLabels[3],
     compare_length_with=Stdlib_listLabels[4],
     cons=Stdlib_listLabels[5],
     tl=Stdlib_listLabels[6],
     nth=Stdlib_listLabels[7],
     nth_opt=Stdlib_listLabels[8],
     rev=Stdlib_listLabels[9],
     init$0=Stdlib_listLabels[10],
     append=Stdlib_listLabels[11],
     rev_append=Stdlib_listLabels[12],
     concat$0=Stdlib_listLabels[13],
     flatten=Stdlib_listLabels[14],
     iter$1=Stdlib_listLabels[15],
     iteri$0=Stdlib_listLabels[16],
     map$1=Stdlib_listLabels[17],
     mapi$0=Stdlib_listLabels[18],
     rev_map=Stdlib_listLabels[19],
     fold_left=Stdlib_listLabels[20],
     fold_right=Stdlib_listLabels[21],
     iter2=Stdlib_listLabels[22],
     map2=Stdlib_listLabels[23],
     rev_map2=Stdlib_listLabels[24],
     fold_left2=Stdlib_listLabels[25],
     fold_right2=Stdlib_listLabels[26],
     for_all=Stdlib_listLabels[27],
     exists$0=Stdlib_listLabels[28],
     for_all2=Stdlib_listLabels[29],
     exists2=Stdlib_listLabels[30],
     mem=Stdlib_listLabels[31],
     memq=Stdlib_listLabels[32],
     find=Stdlib_listLabels[33],
     find_opt=Stdlib_listLabels[34],
     filter=Stdlib_listLabels[35],
     find_all=Stdlib_listLabels[36],
     partition=Stdlib_listLabels[37],
     assoc=Stdlib_listLabels[38],
     assoc_opt=Stdlib_listLabels[39],
     assq=Stdlib_listLabels[40],
     assq_opt=Stdlib_listLabels[41],
     mem_assoc=Stdlib_listLabels[42],
     mem_assq=Stdlib_listLabels[43],
     remove_assoc=Stdlib_listLabels[44],
     remove_assq=Stdlib_listLabels[45],
     split=Stdlib_listLabels[46],
     combine=Stdlib_listLabels[47],
     sort=Stdlib_listLabels[48],
     stable_sort=Stdlib_listLabels[49],
     fast_sort=Stdlib_listLabels[50],
     merge=Stdlib_listLabels[52],
     to_seq$0=Stdlib_listLabels[53],
     of_seq$0=Stdlib_listLabels[54],
     _c_=Stdlib_listLabels[51];
    function sort_uniq$0(compare,l){return caml_call2(_c_,compare,l)}
    function find$0(xs,equal,key)
     {try
       {var
         _bW_=function(param){var k=param[1];return caml_call2(equal,k,key)},
         _bX_=[0,caml_call2(Stdlib_listLabels[33],_bW_,xs)[2]];
        return _bX_}
      catch(_bY_)
       {_bY_ = caml_wrap_exception(_bY_);
        if(_bY_ === Not_found)return 0;
        throw _bY_}}
    var Assoc=[0,find$0];
    function concat_map(xs,f)
     {return caml_call1(concat$0,caml_call2(Stdlib_listLabels[17],f,xs))}
    function zip(l1,l2)
     {try
       {var _bU_=[0,caml_call3(map2,function(a,b){return [0,a,b]},l1,l2)];
        return _bU_}
      catch(_bV_){return 0}}
    var
     List=
      [0,
       length,
       hd,
       compare_lengths,
       compare_length_with,
       cons,
       tl,
       nth,
       nth_opt,
       rev,
       init$0,
       append,
       rev_append,
       concat$0,
       flatten,
       iter$1,
       iteri$0,
       map$1,
       mapi$0,
       rev_map,
       fold_left,
       fold_right,
       iter2,
       map2,
       rev_map2,
       fold_left2,
       fold_right2,
       for_all,
       exists$0,
       for_all2,
       exists2,
       mem,
       memq,
       find,
       find_opt,
       filter,
       find_all,
       partition,
       assoc,
       assoc_opt,
       assq,
       assq_opt,
       mem_assoc,
       mem_assq,
       remove_assoc,
       remove_assq,
       split,
       combine,
       sort,
       stable_sort,
       fast_sort,
       merge,
       to_seq$0,
       of_seq$0,
       sort_uniq$0,
       Assoc,
       concat_map,
       zip,
       fold_left],
     Bin_shape_lib_Core_fragment=
      [0,
       compare_bool,
       compare_char,
       compare_float,
       compare,
       compare_int32,
       compare_int64,
       compare_nativeint,
       compare_string,
       compare_unit,
       compare_array,
       compare_list,
       compare_option,
       compare_ref,
       default_string_of_float,
       write_old_option_format,
       read_old_option_format,
       list_map,
       sexp_of_unit,
       sexp_of_bool,
       sexp_of_string,
       sexp_of_bytes,
       sexp_of_char,
       sexp_of_t,
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
       Exn_converter,
       sort_uniq,
       Caml,
       Sexp,
       failwithf,
       Identifiable,
       include,
       Int,
       Option,
       List];
    caml_register_global
     (129,Bin_shape_lib_Core_fragment,"Bin_shape_lib__Core_fragment");
    var
     sexp_of_t$0=include[40],
     of_string$0=include[42],
     to_string$0=include[43],
     compare$1=include[33],
     t_of_sexp=include[39],
     sexp_of_t$1=include[40],
     of_string$1=include[42],
     to_string$1=include[43];
    function eval_fail(loc,fmt)
     {function _bT_(s)
       {return caml_call2
                (failwithf
                  ([0,
                    [24,
                     _e_,
                     function(param,custom_printf_001)
                      {return caml_call1(to_string$0,custom_printf_001)},
                     _d_],
                    cst_Location_s]),
                 loc,
                 s)}
      return caml_call2(Stdlib_printf[9],_bT_,fmt)}
    function equal_option(equal,a,b)
     {if(a)
       {if(b){var y=b[1],x=a[1];return caml_call2(equal,x,y)}}
      else
       if(! b)return 1;
      return 0}
    function create(loc,eq,xs$1)
     {function _bR_(param,_bS_)
       {var s2=_bS_[1],s1=param[1];return caml_call2(include[33],s1,s2)}
      var param$0=caml_call2(List[48],_bR_,xs$1);
      if(param$0)
       {var
         xs$0=param$0[2],
         match$0=param$0[1],
         value$0=match$0[2],
         key$0=match$0[1],
         acc$1=[0,[0,key$0,value$0],0],
         acc=acc$1,
         last_key=key$0,
         last_value=value$0,
         param=xs$0;
        for(;;)
         {if(param)
           {var xs=param[2],match=param[1],value=match[2],key=match[1];
            if(! caml_call2(include[41],last_key,key))
             {var
               acc$0=[0,[0,key,value],acc],
               acc=acc$0,
               last_key=key,
               last_value=value,
               param=xs;
              continue}
            if(caml_call2(eq,last_value,value)){var param=xs;continue}
            var match$1=[0,-1062743954,key]}
          else
           var match$1=[0,17724,caml_call1(List[9],acc)];
          break}}
      else
       var match$1=_g_;
      if(17724 <= match$1[1]){var sorted=match$1[2];return [0,sorted]}
      var s=match$1[2];
      return caml_call2(eval_fail(loc,_h_),s,0)}
    function map$2(t,f)
     {var _bP_=t[1];
      function _bQ_(param)
       {var v=param[2],k=param[1];return [0,k,caml_call1(f,v)]}
      return [0,caml_call2(List[17],_bQ_,_bP_)]}
    var
     compare$2=Md5_lib[1],
     to_binary=Md5_lib[3],
     to_hex=Md5_lib[6],
     of_hex_exn=Md5_lib[7],
     string=Md5_lib[8];
    function to_md5(t){return t}
    function of_md5(t){return t}
    function sexp_of_t$2(t)
     {return caml_call1(sexp_of_string,caml_call1(to_hex,t))}
    function t_of_sexp$0(s)
     {return caml_call1(of_hex_exn,caml_call1(string_of_sexp,s))}
    function uuid(u){return caml_call1(string,caml_call1(to_string$1,u))}
    function int$0(x){return caml_call1(string,caml_call1(Stdlib[22],x))}
    function pair(x,y)
     {var _bN_=caml_call1(to_binary,y),_bO_=caml_call1(to_binary,x);
      return caml_call1(string,caml_call2(Stdlib[17],_bO_,_bN_))}
    function list(l)
     {var _bM_=caml_call2(List[17],to_binary,l);
      return caml_call1(string,caml_call2(include[7],cst,_bM_))}
    function constructor(s,l)
     {var _bL_=caml_call1(to_binary,list(l));
      return caml_call1(string,caml_call2(Stdlib[17],s,_bL_))}
    function sexp_of_t$3(of_a,param)
     {switch(param[0])
       {case 0:
         var
          v1=param[2],
          v0$0=param[1],
          v0$1=caml_call1(sexp_of_t$1,v0$0),
          v1$0=caml_call1(of_a,v1);
         return [1,[0,_i_,[0,v0$1,[0,v1$0,0]]]];
        case 1:
         var
          v1$1=param[2],
          v0$2=param[1],
          v0$3=caml_call1(sexp_of_t$1,v0$2),
          v1$2=caml_call2(sexp_of_list,of_a,v1$1);
         return [1,[0,_j_,[0,v0$3,[0,v1$2,0]]]];
        case 2:
         var v0$4=param[1],v0$5=caml_call2(sexp_of_list,of_a,v0$4);
         return [1,[0,_k_,[0,v0$5,0]]];
        case 3:
         var
          v0$6=param[1],
          v0$7=
           caml_call2
            (sexp_of_list,
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=caml_call1(sexp_of_string,v0),
                v1$0=caml_call1(of_a,v1);
               return [1,[0,v0$0,[0,v1$0,0]]]},
             v0$6);
         return [1,[0,_l_,[0,v0$7,0]]];
        case 4:
         var
          v0$8=param[1],
          v0$9=
           caml_call2
            (sexp_of_list,
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=caml_call1(sexp_of_string,v0),
                v1$0=caml_call2(sexp_of_list,of_a,v1);
               return [1,[0,v0$0,[0,v1$0,0]]]},
             v0$8);
         return [1,[0,_m_,[0,v0$9,0]]];
        case 5:
         var
          v0$10=param[1],
          of_a$0=caml_call1(sexp_of_option,of_a),
          v_sorted=v0$10[1],
          bnds=0,
          arg=
           caml_call2
            (sexp_of_list,
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=caml_call1(sexp_of_string,v0),
                v1$0=caml_call1(of_a$0,v1);
               return [1,[0,v0$0,[0,v1$0,0]]]},
             v_sorted),
          bnds$0=[0,[1,[0,_f_,[0,arg,0]]],bnds],
          v0=[1,bnds$0];
         return [1,[0,_n_,[0,v0,0]]];
        case 6:
         var
          v1$3=param[2],
          v0$11=param[1],
          v0$12=caml_call1(of_a,v0$11),
          v1$4=caml_call2(sexp_of_list,of_a,v1$3);
         return [1,[0,_o_,[0,v0$12,[0,v1$4,0]]]];
        case 7:
         var
          v1$5=param[2],
          v0$13=param[1],
          v0$14=caml_call1(sexp_of_t,v0$13),
          v1$6=caml_call2(sexp_of_list,of_a,v1$5);
         return [1,[0,_p_,[0,v0$14,[0,v1$6,0]]]];
        default:
         var v0$15=param[1],v0$16=caml_call1(sexp_of_t,v0$15);
         return [1,[0,_q_,[0,v0$16,0]]]}}
    function map$3(x,f)
     {switch(x[0])
       {case 0:var x$0=x[2],u=x[1];return [0,u,caml_call1(f,x$0)];
        case 1:var xs=x[2],s=x[1];return [1,s,caml_call2(List[17],f,xs)];
        case 2:var xs$0=x[1];return [2,caml_call2(List[17],f,xs$0)];
        case 3:
         var
          l=x[1],
          _bI_=
           function(param)
            {var x=param[2],s=param[1];return [0,s,caml_call1(f,x)]};
         return [3,caml_call2(List[17],_bI_,l)];
        case 4:
         var
          l$0=x[1],
          _bJ_=
           function(param)
            {var xs=param[2],s=param[1];
             return [0,s,caml_call2(List[17],f,xs)]};
         return [4,caml_call2(List[17],_bJ_,l$0)];
        case 5:var t=x[1];return [5,map$2(t,caml_call1(Option[2],f))];
        case 6:
         var l$1=x[2],x$1=x[1],_bK_=caml_call2(List[17],f,l$1);
         return [6,caml_call1(f,x$1),_bK_];
        case 7:
         var l$2=x[2],t$0=x[1];return [7,t$0,caml_call2(List[17],f,l$2)];
        default:var v=x[1];return [8,v]}}
    function to_string$2(t)
     {var _bH_=sexp_of_t$3(function(param){return _r_},t);
      return caml_call1(Base[192][15],_bH_)}
    function digest_layer(param)
     {switch(param[0])
       {case 0:
         var x=param[2],u=param[1];
         return constructor(cst_annotate$1,[0,uuid(u),[0,x,0]]);
        case 1:
         var l=param[2],u$0=param[1],_bw_=[0,list(l),0];
         return constructor(cst_base$1,[0,uuid(u$0),_bw_]);
        case 2:
         var l$0=param[1];return constructor(cst_tuple$1,[0,list(l$0),0]);
        case 3:
         var
          l$1=param[1],
          _bx_=0,
          _by_=
           function(param)
            {var t=param[2],s=param[1];return pair(caml_call1(string,s),t)};
         return constructor
                 (cst_record$1,[0,list(caml_call2(List[17],_by_,l$1)),_bx_]);
        case 4:
         var
          l$2=param[1],
          _bz_=0,
          _bA_=
           function(param)
            {var l=param[2],s=param[1],_bG_=list(l);
             return pair(caml_call1(string,s),_bG_)};
         return constructor
                 (cst_variant$1,[0,list(caml_call2(List[17],_bA_,l$2)),_bz_]);
        case 5:
         var
          table=param[1],
          _bB_=0,
          _bC_=table[1],
          _bD_=
           function(param)
            {var y=param[2],x$0=param[1];
             if(y)
              var x=y[1],_bF_=constructor(cst_some,[0,x,0]);
             else
              var _bF_=constructor(cst_none,0);
             return pair(caml_call1(string,x$0),_bF_)};
         return constructor
                 (cst_poly_variant$1,
                  [0,list(caml_call2(List[17],_bD_,_bC_)),_bB_]);
        case 6:
         var l$3=param[2],x$0=param[1];
         return constructor(cst_application$1,[0,x$0,[0,list(l$3),0]]);
        case 7:
         var l$4=param[2],n=param[1],_bE_=[0,list(l$4),0];
         return constructor(cst_rec_app$1,[0,int$0(n),_bE_]);
        default:
         var n$0=param[1];return constructor(cst_var$1,[0,int$0(n$0),0])}}
    function to_digest(param){var x=param[1];return x}
    function to_digest$0(x)
     {switch(x[0])
       {case 0:var x$0=x[1];return digest_layer([5,x$0]);
        case 1:var match=x[1],x$1=match[2];return x$1;
        default:var x$2=x[1];return x$2}}
    function equal$0(x,y)
     {var _bv_=to_digest$0(y);
      return 0 === caml_call2(compare$2,to_digest$0(x),_bv_)?1:0}
    function opaque(x){return [2,to_digest$0(x)]}
    function create$0(x)
     {var x$0=map$3(x,to_digest$0),desc=to_string$2(x$0);
      switch(x$0[0])
       {case 0:return [1,[0,desc,digest_layer(x$0)]];
        case 1:return [1,[0,desc,digest_layer(x$0)]];
        case 5:var l=x$0[1];return [0,l];
        case 6:return [1,[0,desc,digest_layer(x$0)]];
        case 7:return [1,[0,desc,digest_layer(x$0)]];
        default:return [1,[0,desc,digest_layer(x$0)]]}}
    function var$0(x){return create$0([8,x])}
    function apply(def,l){return create$0([6,def,l])}
    function recurse(tid,l){return create$0([7,tid,l])}
    function get_poly_variant(x)
     {if(1 === x[0]){var match=x[1],desc=match[1];return [1,desc]}
      var l=x[1];
      function _bu_(x){return [2,x]}
      return [0,map$2(l,caml_call1(Option[2],_bu_))]}
    var Def=[0];
    function annotate(u,x){return create$0([0,u,x])}
    function basetype(u,l){return create$0([1,u,l])}
    function tuple(l){return create$0([2,l])}
    function poly_variant(loc,l)
     {return create$0
              ([5,
                create
                 (loc,
                  function(_bs_,_bt_){return equal_option(equal$0,_bs_,_bt_)},
                  l)])}
    function var$1(x){return create$0([8,x])}
    function apply$0(x,l){return create$0([6,x,l])}
    function recurse$0(t,l){return create$0([7,t,l])}
    function define(x){return x}
    function record(l){return create$0([3,l])}
    function variant(l){return create$0([4,l])}
    function create$1(e){return [0,to_digest$0(e)]}
    var
     Canonical_digest=
      [0,
       to_digest,
       [0,var$0,recurse,apply,opaque,get_poly_variant],
       Def,
       [0,
        annotate,
        basetype,
        tuple,
        poly_variant,
        var$1,
        recurse$0,
        apply$0,
        define,
        record,
        variant,
        create$1]];
    function cmp_a$0(counter,a_064,b_065)
     {if(caml_call2(Ppx_compare_lib[1],a_064,b_065))return 0;
      var b_067=b_065[1],a_066=a_064[1];
      if(caml_call2(Ppx_compare_lib[1],a_066,b_067))return 0;
      switch(a_066[0])
       {case 0:
         var _bf_=a_066[2],_bg_=a_066[1];
         if(0 === b_067[0])
          {var
            b_015=b_067[2],
            b_013=b_067[1],
            n=caml_call2(compare$1,_bg_,b_013);
           if(0 === n)
            {if(counter < 50)
              {var counter$0=counter + 1 | 0;
               return cmp_a$0(counter$0,_bf_,b_015)}
             return caml_trampoline_return(cmp_a$0,[0,_bf_,b_015])}
           return n}
         return -1;
        case 1:
         var _bh_=a_066[2],_bi_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:
            var
             b_019=b_067[2],
             b_017=b_067[1],
             n$0=caml_call2(compare$1,_bi_,b_017);
            return 0 === n$0?caml_call3(compare_list,cmp_a,_bh_,b_019):n$0;
           default:return -1}
         break;
        case 2:
         var _bj_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:
            var b_023=b_067[1];
            return caml_call3(compare_list,cmp_a,_bj_,b_023);
           default:return -1}
         break;
        case 3:
         var _bk_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:
            var b_027=b_067[1];
            return caml_call3
                    (compare_list,
                     function(a_028,b_029)
                      {var
                        t_031=a_028[2],
                        t_030=a_028[1],
                        t_033=b_029[2],
                        t_032=b_029[1],
                        n=caml_call2(compare_string,t_030,t_032);
                       return 0 === n?cmp_a(t_031,t_033):n},
                     _bk_,
                     b_027);
           default:return -1}
         break;
        case 4:
         var _bl_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:
            var b_035=b_067[1];
            return caml_call3
                    (compare_list,
                     function(a_036,b_037)
                      {var
                        t_039=a_036[2],
                        t_038=a_036[1],
                        t_041=b_037[2],
                        t_040=b_037[1],
                        n=caml_call2(compare_string,t_038,t_040);
                       return 0 === n?caml_call3(compare_list,cmp_a,t_039,t_041):n},
                     _bl_,
                     b_035);
           default:return -1}
         break;
        case 5:
         var _bm_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:var switch$0=4;break;
           case 5:
            var b_045=b_067[1];
            if(caml_call2(Ppx_compare_lib[1],_bm_,b_045))return 0;
            var _bd_=b_045[1],_be_=_bm_[1];
            return caml_call3
                    (compare_list,
                     function(a_004,b_005)
                      {var
                        t_007=a_004[2],
                        t_006=a_004[1],
                        t_009=b_005[2],
                        t_008=b_005[1],
                        n=caml_call2(compare_string,t_006,t_008);
                       return 0 === n
                               ?caml_call3(compare_option,cmp_a,t_007,t_009)
                               :n},
                     _be_,
                     _bd_);
           default:return -1}
         break;
        case 6:
         var _bn_=a_066[2],_bo_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:var switch$0=4;break;
           case 5:var switch$0=5;break;
           case 6:
            var b_053=b_067[2],b_051=b_067[1],n$1=cmp_a(_bo_,b_051);
            return 0 === n$1?caml_call3(compare_list,cmp_a,_bn_,b_053):n$1;
           default:return -1}
         break;
        case 7:
         var _bp_=a_066[2],_bq_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:var switch$0=4;break;
           case 5:var switch$0=5;break;
           case 6:var switch$0=6;break;
           case 7:
            var
             b_059=b_067[2],
             b_057=b_067[1],
             n$2=caml_call2(compare,_bq_,b_057);
            return 0 === n$2?caml_call3(compare_list,cmp_a,_bp_,b_059):n$2;
           default:return -1}
         break;
        default:
         var _br_=a_066[1];
         switch(b_067[0])
          {case 0:var switch$0=0;break;
           case 1:var switch$0=1;break;
           case 2:var switch$0=2;break;
           case 3:var switch$0=3;break;
           case 4:var switch$0=4;break;
           case 5:var switch$0=5;break;
           case 6:var switch$0=6;break;
           case 7:return 1;
           default:var b_063=b_067[1];return caml_call2(compare,_br_,b_063)}}
      switch(switch$0)
       {case 0:return 1;
        case 1:return 1;
        case 2:return 1;
        case 3:return 1;
        case 4:return 1;
        case 5:return 1;
        default:return 1}}
    function cmp_a(a_064,b_065)
     {return caml_trampoline(cmp_a$0(0,a_064,b_065))}
    var of_a=function _bc_(_bb_){return _bc_.fun(_bb_)};
    runtime.caml_update_dummy
     (of_a,
      function(sexp)
       {if(0 === sexp[0])
         {var
           _a3_=sexp[1],
           switch$0=
            caml_string_notequal(_a3_,cst_Exp)
             ?caml_string_notequal(_a3_,cst_exp)?1:0
             :0;
          if(! switch$0)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp)}
        else
         {var _a4_=sexp[1];
          if(! _a4_)
           return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$1,sexp);
          var _a5_=_a4_[1];
          if(0 !== _a5_[0])
           return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$1,sexp);
          var
           _a6_=_a5_[1],
           switch$1=
            caml_string_notequal(_a6_,cst_Exp$0)
             ?caml_string_notequal(_a6_,cst_exp$0)?1:0
             :0;
          if(! switch$1)
           {var sexp_args$8=_a4_[2];
            if(sexp_args$8)
             if(! sexp_args$8[2])
              {var v0$17=sexp_args$8[1];
               if(0 === v0$17[0])
                {var
                  _aT_=v0$17[1],
                  _aU_=caml_string_compare(_aT_,cst_annotate);
                 if(0 <= _aU_)
                  if(0 < _aU_)
                   if(caml_string_notequal(_aT_,cst_application))
                    if(caml_string_notequal(_aT_,cst_base))
                     if(caml_string_notequal(_aT_,cst_poly_variant))
                      if(caml_string_notequal(_aT_,cst_rec_app))
                       if(caml_string_notequal(_aT_,cst_record))
                        if(caml_string_notequal(_aT_,cst_tuple))
                         if(caml_string_notequal(_aT_,cst_var))
                          if(caml_string_notequal(_aT_,cst_variant))
                           var switch$2=0,switch$3=0;
                          else
                           var switch$3=5;
                         else
                          var switch$3=9;
                        else
                         var switch$3=3;
                       else
                        var switch$3=4;
                      else
                       var switch$3=8;
                     else
                      var switch$3=6;
                    else
                     var switch$3=2;
                   else
                    var switch$3=7;
                  else
                   var switch$3=1;
                 else
                  if(caml_string_notequal(_aT_,cst_Annotate))
                   if(caml_string_notequal(_aT_,cst_Application))
                    if(caml_string_notequal(_aT_,cst_Base))
                     if(caml_string_notequal(_aT_,cst_Poly_variant))
                      if(caml_string_notequal(_aT_,cst_Rec_app))
                       if(caml_string_notequal(_aT_,cst_Record))
                        if(caml_string_notequal(_aT_,cst_Tuple))
                         if(caml_string_notequal(_aT_,cst_Var))
                          if(caml_string_notequal(_aT_,cst_Variant))
                           var switch$2=0,switch$3=0;
                          else
                           var switch$3=5;
                         else
                          var switch$3=9;
                        else
                         var switch$3=3;
                       else
                        var switch$3=4;
                      else
                       var switch$3=8;
                     else
                      var switch$3=6;
                    else
                     var switch$3=2;
                   else
                    var switch$3=7;
                  else
                   var switch$3=1;
                 switch(switch$3)
                  {case 0:break;
                   case 1:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 2:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 3:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 4:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 5:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 6:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 7:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   case 8:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1;
                    break;
                   default:
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,v0$17),
                     switch$2=1}}
               else
                {var _aV_=v0$17[1];
                 if(_aV_)
                  {var _aW_=_aV_[1];
                   if(0 === _aW_[0])
                    {var
                      _aX_=_aW_[1],
                      _aY_=caml_string_compare(_aX_,cst_annotate$0);
                     if(0 <= _aY_)
                      if(0 < _aY_)
                       if(caml_string_notequal(_aX_,cst_application$0))
                        if(caml_string_notequal(_aX_,cst_base$0))
                         if(caml_string_notequal(_aX_,cst_poly_variant$0))
                          if(caml_string_notequal(_aX_,cst_rec_app$0))
                           if(caml_string_notequal(_aX_,cst_record$0))
                            if(caml_string_notequal(_aX_,cst_tuple$0))
                             if(caml_string_notequal(_aX_,cst_var$0))
                              if(caml_string_notequal(_aX_,cst_variant$0))
                               var switch$2=0,switch$4=0;
                              else
                               var switch$4=5;
                             else
                              var switch$4=9;
                            else
                             var switch$4=3;
                           else
                            var switch$4=4;
                          else
                           var switch$4=8;
                         else
                          var switch$4=6;
                        else
                         var switch$4=2;
                       else
                        var switch$4=7;
                      else
                       var switch$4=1;
                     else
                      if(caml_string_notequal(_aX_,cst_Annotate$0))
                       if(caml_string_notequal(_aX_,cst_Application$0))
                        if(caml_string_notequal(_aX_,cst_Base$0))
                         if(caml_string_notequal(_aX_,cst_Poly_variant$0))
                          if(caml_string_notequal(_aX_,cst_Rec_app$0))
                           if(caml_string_notequal(_aX_,cst_Record$0))
                            if(caml_string_notequal(_aX_,cst_Tuple$0))
                             if(caml_string_notequal(_aX_,cst_Var$0))
                              if(caml_string_notequal(_aX_,cst_Variant$0))
                               var switch$2=0,switch$4=0;
                              else
                               var switch$4=5;
                             else
                              var switch$4=9;
                            else
                             var switch$4=3;
                           else
                            var switch$4=4;
                          else
                           var switch$4=8;
                         else
                          var switch$4=6;
                        else
                         var switch$4=2;
                       else
                        var switch$4=7;
                      else
                       var switch$4=1;
                     switch(switch$4)
                      {case 0:break;
                       case 1:
                        var sexp_args$7=_aV_[2];
                        if(sexp_args$7)
                         {var _a2_=sexp_args$7[2];
                          if(_a2_)
                           if(_a2_[2])
                            var switch$5=1;
                           else
                            var
                             v1$5=_a2_[1],
                             v0$15=sexp_args$7[1],
                             v0$16=caml_call1(t_of_sexp,v0$15),
                             v1$6=caml_call1(of_a,v1$5),
                             v0$18=[0,v0$16,v1$6],
                             switch$2=1,
                             switch$5=0;
                          else
                           var switch$5=1}
                        else
                         var switch$5=1;
                        if(switch$5)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 2:
                        var sexp_args$5=_aV_[2];
                        if(sexp_args$5)
                         {var _a0_=sexp_args$5[2];
                          if(_a0_)
                           if(_a0_[2])
                            var switch$6=1;
                           else
                            var
                             v1$1=_a0_[1],
                             v0$11=sexp_args$5[1],
                             v0$12=caml_call1(t_of_sexp,v0$11),
                             v1$2=caml_call2(list_of_sexp,of_a,v1$1),
                             v0$18=[1,v0$12,v1$2],
                             switch$2=1,
                             switch$6=0;
                          else
                           var switch$6=1}
                        else
                         var switch$6=1;
                        if(switch$6)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 3:
                        var sexp_args$1=_aV_[2];
                        if(sexp_args$1)
                         if(sexp_args$1[2])
                          var switch$7=1;
                         else
                          var
                           v0$3=sexp_args$1[1],
                           v0$4=caml_call2(list_of_sexp,of_a,v0$3),
                           v0$18=[2,v0$4],
                           switch$2=1,
                           switch$7=0;
                        else
                         var switch$7=1;
                        if(switch$7)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 4:
                        var sexp_args$2=_aV_[2];
                        if(sexp_args$2)
                         if(sexp_args$2[2])
                          var switch$8=1;
                         else
                          var
                           v0$5=sexp_args$2[1],
                           v0$6=
                            caml_call2
                             (list_of_sexp,
                              function(sexp)
                               {if(1 === sexp[0])
                                 {var _a$_=sexp[1];
                                  if(_a$_)
                                   {var _ba_=_a$_[2];
                                    if(_ba_)
                                     if(! _ba_[2])
                                      {var
                                        v1=_ba_[1],
                                        v0=_a$_[1],
                                        v0$0=caml_call1(string_of_sexp,v0),
                                        v1$0=caml_call1(of_a,v1);
                                       return [0,v0$0,v1$0]}}}
                                return caml_call3
                                        (Sexplib0_Sexp_conv_error[2],tp_loc$0,2,sexp)},
                              v0$5),
                           v0$18=[3,v0$6],
                           switch$2=1,
                           switch$8=0;
                        else
                         var switch$8=1;
                        if(switch$8)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 5:
                        var sexp_args=_aV_[2];
                        if(sexp_args)
                         if(sexp_args[2])
                          var switch$9=1;
                         else
                          var
                           v0=sexp_args[1],
                           v0$0=
                            caml_call2
                             (list_of_sexp,
                              function(sexp)
                               {if(1 === sexp[0])
                                 {var _a9_=sexp[1];
                                  if(_a9_)
                                   {var _a__=_a9_[2];
                                    if(_a__)
                                     if(! _a__[2])
                                      {var
                                        v1=_a__[1],
                                        v0=_a9_[1],
                                        v0$0=caml_call1(string_of_sexp,v0),
                                        v1$0=caml_call2(list_of_sexp,of_a,v1);
                                       return [0,v0$0,v1$0]}}}
                                return caml_call3
                                        (Sexplib0_Sexp_conv_error[2],tp_loc$0,2,sexp)},
                              v0),
                           v0$18=[4,v0$0],
                           switch$2=1,
                           switch$9=0;
                        else
                         var switch$9=1;
                        if(switch$9)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 6:
                        var sexp_args$4=_aV_[2];
                        if(sexp_args$4)
                         if(sexp_args$4[2])
                          var switch$10=1;
                         else
                          {var
                            v0$9=sexp_args$4[1],
                            of_a$0=caml_call1(option_of_sexp,of_a);
                           if(0 === v0$9[0])
                            var
                             v0$10=
                              caml_call2(Sexplib0_Sexp_conv_error[15],tp_loc,v0$9);
                           else
                            {var
                              field_sexps=v0$9[1],
                              sorted_field=[0,0],
                              duplicates=[0,0],
                              extra=[0,0],
                              param=field_sexps;
                             for(;;)
                              {if(param)
                                {var _aN_=param[1];
                                 if(1 === _aN_[0])
                                  {var _aO_=_aN_[1];
                                   if(_aO_)
                                    {var _aP_=_aO_[1];
                                     if(0 === _aP_[0])
                                      {var _aQ_=_aO_[2],_aR_=_aP_[1];
                                       if(! _aQ_)
                                        {var tail$0=param[2];
                                         if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_aR_,extra[1]];
                                         var param=tail$0;
                                         continue}
                                       if(! _aQ_[2])
                                        {var tail=param[2],field_sexp=_aQ_[1];
                                         if(caml_string_notequal(_aR_,cst_sorted))
                                          {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_aR_,extra[1]]}
                                         else
                                          if(sorted_field[1])
                                           duplicates[1] = [0,_aR_,duplicates[1]];
                                          else
                                           {var
                                             fvalue=
                                              caml_call2
                                               (list_of_sexp,
                                                function(sexp)
                                                 {if(1 === sexp[0])
                                                   {var _a7_=sexp[1];
                                                    if(_a7_)
                                                     {var _a8_=_a7_[2];
                                                      if(_a8_)
                                                       if(! _a8_[2])
                                                        {var
                                                          v1=_a8_[1],
                                                          v0=_a7_[1],
                                                          v0$0=caml_call1(string_of_sexp,v0),
                                                          v1$0=caml_call1(of_a$0,v1);
                                                         return [0,v0$0,v1$0]}}}
                                                  return caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc,2,sexp)},
                                                field_sexp);
                                            sorted_field[1] = [0,fvalue]}
                                         var param=tail;
                                         continue}}}}
                                 caml_call2(Sexplib0_Sexp_conv_error[9],tp_loc,_aN_)}
                               if(duplicates[1])
                                var
                                 v0$10=
                                  caml_call3
                                   (Sexplib0_Sexp_conv_error[11],tp_loc,duplicates[1],v0$9);
                               else
                                if(extra[1])
                                 var
                                  v0$10=
                                   caml_call3
                                    (Sexplib0_Sexp_conv_error[12],tp_loc,extra[1],v0$9);
                                else
                                 {var _aS_=sorted_field[1];
                                  if(_aS_)
                                   var sorted_value=_aS_[1],v0$10=[0,sorted_value];
                                  else
                                   var
                                    v0$10=
                                     caml_call3
                                      (Sexplib0_Sexp_conv_error[14],
                                       tp_loc,
                                       v0$9,
                                       [0,[0,0 === sorted_field[1]?1:0,cst_sorted$0],0])}
                               break}}
                           var v0$18=[5,v0$10],switch$2=1,switch$10=0}
                        else
                         var switch$10=1;
                        if(switch$10)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 7:
                        var sexp_args$6=_aV_[2];
                        if(sexp_args$6)
                         {var _a1_=sexp_args$6[2];
                          if(_a1_)
                           if(_a1_[2])
                            var switch$11=1;
                           else
                            var
                             v1$3=_a1_[1],
                             v0$13=sexp_args$6[1],
                             v0$14=caml_call1(of_a,v0$13),
                             v1$4=caml_call2(list_of_sexp,of_a,v1$3),
                             v0$18=[6,v0$14,v1$4],
                             switch$2=1,
                             switch$11=0;
                          else
                           var switch$11=1}
                        else
                         var switch$11=1;
                        if(switch$11)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       case 8:
                        var sexp_args$3=_aV_[2];
                        if(sexp_args$3)
                         {var _aZ_=sexp_args$3[2];
                          if(_aZ_)
                           if(_aZ_[2])
                            var switch$12=1;
                           else
                            var
                             v1=_aZ_[1],
                             v0$7=sexp_args$3[1],
                             v0$8=caml_call1(int_of_sexp,v0$7),
                             v1$0=caml_call2(list_of_sexp,of_a,v1),
                             v0$18=[7,v0$8,v1$0],
                             switch$2=1,
                             switch$12=0;
                          else
                           var switch$12=1}
                        else
                         var switch$12=1;
                        if(switch$12)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1;
                        break;
                       default:
                        var sexp_args$0=_aV_[2];
                        if(sexp_args$0)
                         if(sexp_args$0[2])
                          var switch$13=1;
                         else
                          var
                           v0$1=sexp_args$0[1],
                           v0$2=caml_call1(int_of_sexp,v0$1),
                           v0$18=[8,v0$2],
                           switch$2=1,
                           switch$13=0;
                        else
                         var switch$13=1;
                        if(switch$13)
                         var
                          v0$18=
                           caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_aX_,v0$17),
                          switch$2=1}}
                   else
                    var
                     v0$18=caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,v0$17),
                     switch$2=1}
                 else
                  var
                   v0$18=caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,v0$17),
                   switch$2=1}
               if(! switch$2)
                var
                 v0$18=
                  caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,v0$17);
               return [0,v0$18]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_a6_,sexp)}}
        return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$1,sexp)});
    function sexp_of_t$4(param)
     {var v0=param[1],v0$0=sexp_of_t$3(sexp_of_t$4,v0);
      return [1,[0,_s_,[0,v0$0,0]]]}
    function equal_t0(x,y){return 0 === cmp_a(x,y)?1:0}
    function var$2(x){return [0,[8,x]]}
    function apply$1(d,xs){return [0,[6,d,xs]]}
    function recurse$1(r,xs){return [0,[7,r,xs]]}
    function get_poly_variant$0(param)
     {var _aM_=param[1];
      if(5 === _aM_[0]){var tab=_aM_[1];return [0,tab]}
      return [1,to_string$2(_aM_)]}
    function opaque$0(t){return t}
    function to_digest$1(param)
     {var e=param[1];return digest_layer(map$3(e,to_digest$1))}
    function to_digest$2(e){return to_digest$1(e)}
    function annotate$0(u,x){return [0,[0,u,x]]}
    function basetype$0(u,xs){return [0,[1,u,xs]]}
    function tuple$0(xs){return [0,[2,xs]]}
    function poly_variant$0(loc,xs)
     {return [0,
              [5,
               create
                (loc,
                 function(_aK_,_aL_){return equal_option(equal_t0,_aK_,_aL_)},
                 xs)]]}
    function var$3(n){return [0,[8,n]]}
    function recurse$2(r,xs){return recurse$1(r,xs)}
    function apply$2(d,xs){return apply$1(d,xs)}
    function define$0(x){return x}
    function record$0(xs){return [0,[3,xs]]}
    function variant$0(xs){return [0,[4,xs]]}
    function create$2(exp){return exp}
    var
     Create=
      [0,
       annotate$0,
       basetype$0,
       tuple$0,
       poly_variant$0,
       var$3,
       recurse$2,
       apply$2,
       define$0,
       record$0,
       variant$0,
       create$2];
    function to_string_hum(t)
     {var _aJ_=sexp_of_t$4(t);return caml_call2(Base[192][13],0,_aJ_)}
    var
     Def$0=[0],
     Exp1=[0,var$2,recurse$1,apply$1,opaque$0,get_poly_variant$0],
     compare$3=include[33],
     sexp_of_t$5=include[40],
     of_string$2=include[42],
     to_string$3=include[43],
     compare$4=include[33],
     sexp_of_t$6=include[40],
     of_string$3=include[42],
     to_string$4=include[43],
     r=[0,0],
     _t_=include[41];
    function group(loc,trips)
     {var u=r[1];
      r[1] = 1 + u | 0;
      function _aI_(param)
       {var t=param[3],vs=param[2],x=param[1];return [0,x,[0,vs,t]]}
      var members=caml_call2(List[17],_aI_,trips);
      return [0,u,loc,members]}
    function lookup(g,tid)
     {var match=caml_call3(List[55][1],g[3],_t_,tid);
      if(match){var scheme=match[1];return scheme}
      var
       _aF_=0,
       _aG_=0,
       _aH_=
        [0,
         [11,
          cst_impossible_lookup_group_unbound_type_identifier,
          [24,
           _z_,
           function(param,custom_printf_108)
            {return caml_call1(to_string$3,custom_printf_108)},
           _aG_]],
         cst_impossible_lookup_group_unbound_type_identifier_Tid];
      return caml_call2(eval_fail(g[2],_aH_),tid,_aF_)}
    function annotate_provisionally(v0,v1){return [0,v0,v1]}
    function basetype$1(v0,v1){return [1,v0,v1]}
    function record$1(v0){return [2,v0]}
    function variant$1(v0){return [3,v0]}
    function tuple$1(v0){return [4,v0]}
    function rec_app(v0,v1){return [7,v0,v1]}
    function top_app(v0,v1,v2){return [8,v0,v1,v2]}
    function of_a$0(param)
     {switch(param[0])
       {case 0:
         var
          v1=param[2],
          v0$0=param[1],
          v0$1=caml_call1(sexp_of_t$1,v0$0),
          v1$0=of_a$0(v1);
         return [1,[0,_A_,[0,v0$1,[0,v1$0,0]]]];
        case 1:
         var
          v1$1=param[2],
          v0$2=param[1],
          v0$3=caml_call1(sexp_of_t$1,v0$2),
          v1$2=caml_call2(sexp_of_list,of_a$0,v1$1);
         return [1,[0,_B_,[0,v0$3,[0,v1$2,0]]]];
        case 2:
         var
          v0$4=param[1],
          v0$5=
           caml_call2
            (sexp_of_list,
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=caml_call1(sexp_of_string,v0),
                v1$0=of_a$0(v1);
               return [1,[0,v0$0,[0,v1$0,0]]]},
             v0$4);
         return [1,[0,_C_,[0,v0$5,0]]];
        case 3:
         var
          v0$6=param[1],
          v0$7=
           caml_call2
            (sexp_of_list,
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=caml_call1(sexp_of_string,v0),
                v1$0=caml_call2(sexp_of_list,of_a$0,v1);
               return [1,[0,v0$0,[0,v1$0,0]]]},
             v0$6);
         return [1,[0,_D_,[0,v0$7,0]]];
        case 4:
         var v0$8=param[1],v0$9=caml_call2(sexp_of_list,of_a$0,v0$8);
         return [1,[0,_E_,[0,v0$9,0]]];
        case 5:
         var
          v0$10=param[1],
          v1$3=v0$10[2],
          v0$11=v0$10[1],
          v0$12=caml_call1(sexp_of_t$0,v0$11),
          v1$4=
           caml_call2
            (sexp_of_list,
             function(param)
              {if(-59723313 <= param[1])
                {var
                  v0=param[2],
                  v1=v0[2],
                  v0$0=v0[1],
                  v0$1=caml_call1(sexp_of_string,v0$0),
                  v1$0=caml_call2(sexp_of_option,of_a$0,v1);
                 return [1,[0,_u_,[0,[1,[0,v0$1,[0,v1$0,0]]],0]]]}
               var
                v0$2=param[2],
                v1$1=v0$2[2],
                v0$3=v0$2[1],
                v0$4=caml_call1(sexp_of_t$0,v0$3),
                v1$2=of_a$0(v1$1);
               return [1,[0,_v_,[0,[1,[0,v0$4,[0,v1$2,0]]],0]]]},
             v1$3),
          v0$13=[1,[0,v0$12,[0,v1$4,0]]];
         return [1,[0,_F_,[0,v0$13,0]]];
        case 6:
         var
          v0$14=param[1],
          v1$5=v0$14[2],
          v0$15=v0$14[1],
          v0$16=caml_call1(sexp_of_t$0,v0$15),
          v1$6=caml_call1(sexp_of_t$6,v1$5),
          v0$17=[1,[0,v0$16,[0,v1$6,0]]];
         return [1,[0,_G_,[0,v0$17,0]]];
        case 7:
         var
          v1$7=param[2],
          v0$18=param[1],
          v0$19=caml_call1(sexp_of_t$5,v0$18),
          v1$8=caml_call2(sexp_of_list,of_a$0,v1$7);
         return [1,[0,_H_,[0,v0$19,[0,v1$8,0]]]];
        default:
         var
          v2=param[3],
          v1$9=param[2],
          v0$20=param[1],
          v_members=v0$20[3],
          v_loc=v0$20[2],
          v_gid=v0$20[1],
          bnds=0,
          arg=
           caml_call2
            (sexp_of_list,
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=caml_call1(sexp_of_t$5,v0),
                v1$0=v1[2],
                v0$1=v1[1],
                v0$2=caml_call2(sexp_of_list,sexp_of_t$6,v0$1),
                v1$1=of_a$0(v1$0),
                v1$2=[1,[0,v0$2,[0,v1$1,0]]];
               return [1,[0,v0$0,[0,v1$2,0]]]},
             v_members),
          bnds$0=[0,[1,[0,_w_,[0,arg,0]]],bnds],
          arg$0=caml_call1(sexp_of_t$0,v_loc),
          bnds$1=[0,[1,[0,_x_,[0,arg$0,0]]],bnds$0],
          arg$1=caml_call1(sexp_of_t,v_gid),
          bnds$2=[0,[1,[0,_y_,[0,arg$1,0]]],bnds$1],
          v0=[1,bnds$2],
          v1$10=caml_call1(sexp_of_t$5,v1$9),
          v2$0=caml_call2(sexp_of_list,of_a$0,v2);
         return [1,[0,_I_,[0,v0,[0,v1$10,[0,v2$0,0]]]]]}}
    function constr(s,t){return [0,-59723313,[0,s,t]]}
    function inherit(loc,t){return [0,-72987685,[0,loc,t]]}
    function var$4(loc,t){return [6,[0,loc,t]]}
    function poly_variant$1(loc,xs){return [5,[0,loc,xs]]}
    function is_cyclic_0(via_VR,group,tid)
     {var set=[0,0];
      function visited(tid){return caml_call2(List[31],tid,set[1])}
      function trav(param)
       {var param$0=param;
        for(;;)
         {switch(param$0[0])
           {case 0:var param$1=param$0[2],param$0=param$1;continue;
            case 1:var ts=param$0[2];break;
            case 2:
             var xs=param$0[1];
             if(via_VR)
              {var _aB_=function(param){var t=param[2];return trav(t)};
               return caml_call2(List[15],_aB_,xs)}
             return 0;
            case 3:
             var xs$0=param$0[1];
             if(via_VR)
              {var
                _aC_=
                 function(param)
                  {var ts=param[2];return caml_call2(List[15],trav,ts)};
               return caml_call2(List[15],_aC_,xs$0)}
             return 0;
            case 4:var ts=param$0[1];break;
            case 5:
             var
              match=param$0[1],
              cs=match[2],
              _aD_=
               function(param)
                {if(-59723313 <= param[1])
                  {var _aE_=param[2][2];
                   if(_aE_){var t=_aE_[1];return trav(t)}
                   return 0}
                 var match=param[2],t$0=match[2];
                 return trav(t$0)};
             return caml_call2(List[15],_aD_,cs);
            case 6:return 0;
            case 7:
             var ts$0=param$0[2],tid=param$0[1];
             if(! visited(tid)){set[1] = [0,tid,set[1]];trav_tid(tid)}
             return caml_call2(List[15],trav,ts$0);
            default:var ts=param$0[3]}
          return caml_call2(List[15],trav,ts)}}
      function trav_tid(tid)
       {var match=lookup(group,tid),body=match[2];return trav(body)}
      trav_tid(tid);
      var res=visited(tid);
      return res}
    var _J_=1,_K_=0;
    function Evaluation(Canonical)
     {var M=caml_call1(Stdlib_map[1],[0,compare$4]),_S_=M[1];
      function _T_(t,param)
       {var v=param[2],k=param[1];return caml_call3(M[4],k,v,t)}
      var create=caml_call2(List[58],_T_,_S_);
      function lookup$0(t,k)
       {try
         {var _az_=[0,caml_call2(M[27],k,t)];return _az_}
        catch(_aA_)
         {_aA_ = caml_wrap_exception(_aA_);
          if(_aA_ === Not_found)return 0;
          throw _aA_}}
      var Venv=[0,lookup$0,create],Applicand=[0];
      function compare_key(a_111,b_112)
       {var
         t_114=a_111[2],
         t_113=a_111[1],
         t_116=b_112[2],
         t_115=b_112[1],
         n=caml_call2(compare,t_113,t_115);
        return 0 === n?caml_call2(compare$3,t_114,t_116):n}
      var M$0=caml_call1(Stdlib_map[1],[0,compare_key]);
      function find(t,k)
       {try
         {var _ax_=[0,caml_call2(M$0[27],k,t)];return _ax_}
        catch(_ay_)
         {_ay_ = caml_wrap_exception(_ay_);
          if(_ay_ === Not_found)return 0;
          throw _ay_}}
      var empty=M$0[1];
      function extend(t,k,v){return caml_call3(M$0[4],k,v,t)}
      var Tenv=[0,find,empty,extend];
      function return$0(x,param,tenv){return x}
      function bind(t,f,depth,tenv)
       {var x=caml_call2(t,depth,tenv);
        return caml_call2(caml_call1(f,x),depth,tenv)}
      function look_env(key,param,tenv)
       {var result=caml_call2(Tenv[1],tenv,key);
        function _aw_(param){var x=param[2];return [0,x]}
        return caml_call2(Option[2],_aw_,result)}
      function extend_new_tid(key,def_t,depth,tenv)
       {var
         value=[0,-271630457,depth],
         tenv$0=caml_call3(Tenv[3],tenv,key,value);
        return [1,caml_call2(def_t,depth + 1 | 0,tenv$0)]}
      function exec(t){return caml_call2(t,0,Tenv[2])}
      var
       Defining=[0,return$0,bind,look_env,extend_new_tid,exec],
       _U_=Defining[2],
       return$1=Defining[1];
      function sequence_defining(xs,f)
       {function loop(acc_ys,param)
         {if(param)
           {var
             xs=param[2],
             x=param[1],
             _av_=function(y){return loop([0,y,acc_ys],xs)};
            return caml_call2(_U_,caml_call1(f,x),_av_)}
          return caml_call1(return$1,caml_call1(List[9],acc_ys))}
        return loop(0,xs)}
      function _V_(group,venv,t)
       {switch(t[0])
         {case 0:
           var
            t$0=t[2],
            s=t[1],
            _ah_=
             function(v)
              {return caml_call1(return$1,caml_call2(Canonical[4][1],s,v))};
           return caml_call2(_U_,_V_(group,venv,t$0),_ah_);
          case 1:
           var
            ts=t[2],
            s$0=t[1],
            _ai_=
             function(vs)
              {return caml_call1(return$1,caml_call2(Canonical[4][2],s$0,vs))};
           return caml_call2(_U_,eval_list(group,venv,ts),_ai_);
          case 2:
           var
            binds=t[1],
            _aj_=
             function(binds)
              {return caml_call1(return$1,caml_call1(Canonical[4][9],binds))};
           return caml_call2
                   (_U_,
                    sequence_defining
                     (binds,
                      function(param)
                       {var x=param[2],s=param[1];
                        function _au_(y){return caml_call1(return$1,[0,s,y])}
                        return caml_call2(_U_,_V_(group,venv,x),_au_)}),
                    _aj_);
          case 3:
           var
            alts=t[1],
            _ak_=
             function(alts)
              {return caml_call1(return$1,caml_call1(Canonical[4][10],alts))};
           return caml_call2
                   (_U_,
                    sequence_defining
                     (alts,
                      function(param)
                       {var xs=param[2],s=param[1];
                        function _at_(ys){return caml_call1(return$1,[0,s,ys])}
                        return caml_call2(_U_,eval_list(group,venv,xs),_at_)}),
                    _ak_);
          case 4:
           var
            ts$0=t[1],
            _al_=
             function(vs)
              {return caml_call1(return$1,caml_call1(Canonical[4][3],vs))};
           return caml_call2(_U_,eval_list(group,venv,ts$0),_al_);
          case 5:
           var
            match=t[1],
            cs=match[2],
            loc=match[1],
            _am_=
             function(xss)
              {var _as_=caml_call1(List[13],xss);
               return caml_call1
                       (return$1,caml_call2(Canonical[4][4],loc,_as_))};
           return caml_call2
                   (_U_,
                    sequence_defining
                     (cs,
                      function(_ar_){return eval_poly_constr(group,venv,_ar_)}),
                    _am_);
          case 6:
           var
            match$0=t[1],
            vid=match$0[2],
            loc$0=match$0[1],
            match$1=caml_call2(Venv[1],venv,vid);
           if(match$1){var x=match$1[1];return caml_call1(return$1,x)}
           var _an_=0,_ao_=0;
           return caml_call2
                   (eval_fail
                     (loc$0,
                      [0,
                       [11,
                        cst_Free_type_variable,
                        [24,
                         _L_,
                         function(param,custom_printf_119)
                          {return caml_call1(to_string$4,custom_printf_119)},
                         _ao_]],
                       cst_Free_type_variable_Vid]),
                    vid,
                    _an_);
          case 7:
           var
            args=t[2],
            tid=t[1],
            _ap_=function(args){return eval_app(group,tid,args)};
           return caml_call2(_U_,eval_list(group,venv,args),_ap_);
          default:
           var
            args$0=t[3],
            tid$0=t[2],
            in_group=t[1],
            _aq_=function(args){return eval_app(in_group,tid$0,args)};
           return caml_call2(_U_,eval_list(group,venv,args$0),_aq_)}}
      function eval_list(group,venv,ts)
       {return sequence_defining
                (ts,function(_ag_){return _V_(group,venv,_ag_)})}
      function eval_poly_constr(group,venv,c)
       {if(-59723313 <= c[1])
         {var _ab_=c[2],_ac_=_ab_[2],_ad_=_ab_[1];
          if(_ac_)
           {var
             t=_ac_[1],
             _ae_=
              function(v)
               {return caml_call1
                        (return$1,[0,[0,_ad_,[0,caml_call1(Canonical[2][4],v)]],0])};
            return caml_call2(_U_,_V_(group,venv,t),_ae_)}
          return caml_call1(return$1,[0,[0,_ad_,0],0])}
        var match=c[2],t$0=match[2],loc=match[1];
        function _af_(v)
         {var match=caml_call1(Canonical[2][5],v);
          if(0 === match[0])
           {var tab=match[1];return caml_call1(return$1,tab[1])}
          var desc=match[1];
          return caml_call2(eval_fail(loc,_M_),desc,0)}
        return caml_call2(_U_,_V_(group,venv,t$0),_af_)}
      function eval_definition(group,formals,body)
       {function ___(i,x){return [0,x,caml_call1(Canonical[2][1],i)]}
        var _$_=caml_call2(List[18],___,formals),venv=caml_call1(Venv[2],_$_);
        function _aa_(v)
         {return caml_call1(return$1,caml_call1(Canonical[4][8],v))}
        return caml_call2(_U_,_V_(group,venv,body),_aa_)}
      function eval_app(group,tid,args)
       {var
         gid=group[1],
         match=lookup(group,tid),
         body=match[2],
         formals=match[1];
        switch(body[0])
         {case 2:
          case 3:var record_or_normal_variant=1;break;
          default:var record_or_normal_variant=0}
        var
         cyclic=is_cyclic_0(_J_,group,tid),
         cyclic_no_VR=is_cyclic_0(_K_,group,tid),
         switch$0=record_or_normal_variant?cyclic?1:0:0;
        if(! switch$0)
         if(! cyclic_no_VR)
          {var match$0=caml_call2(List[57],formals,args);
           if(match$0)
            var x=match$0[1],venv=caml_call1(Venv[2],x);
           else
            var
             venv=
              caml_call1(Stdlib[3],cst_apply_incorrect_type_application_arity);
           return _V_(group,venv,body)}
        function _X_(param)
         {if(0 === param[0])
           {var r=param[1];
            return caml_call1(return$1,caml_call2(Canonical[2][2],r,args))}
          var def=param[1];
          return caml_call1(return$1,caml_call2(Canonical[2][3],def,args))}
        function _Y_(param)
         {if(param){var recurse=param[1];return caml_call1(return$1,recurse)}
          var _Z_=eval_definition(group,formals,body);
          return caml_call2(Defining[4],[0,gid,tid],_Z_)}
        return caml_call2
                (_U_,
                 caml_call2(_U_,caml_call1(Defining[3],[0,gid,tid]),_Y_),
                 _X_)}
      function eval$0(t)
       {var
         group$0=group(caml_call1(of_string$0,cst_top_level),0),
         venv=caml_call1(Venv[2],0),
         _W_=_V_(group$0,venv,t),
         v=caml_call1(Defining[5],_W_);
        return caml_call1(Canonical[4][11],v)}
      return [0,
              Venv,
              Applicand,
              Tenv,
              Defining,
              _U_,
              return$1,
              sequence_defining,
              eval_list,
              eval_poly_constr,
              eval_definition,
              eval_app,
              eval$0]}
    var
     Exp=[0],
     include$0=Evaluation([0,to_digest$2,Exp1,Def$0,Create]),
     _N_=include$0[12],
     Evaluation_to_digest=Evaluation(Canonical_digest);
    function eval_to_digest(exp)
     {var _R_=caml_call1(Evaluation_to_digest[12],exp);
      return caml_call1(Canonical_digest[1],_R_)}
    function eval_to_digest_string(exp)
     {return caml_call1(to_hex,eval_to_digest(exp))}
    var
     Not_a_tuple=
      [248,
       cst_Bin_shape_lib_Bin_shape_For_typerep_Not_a_tuple,
       runtime.caml_fresh_oo_id(0)];
    function _O_(param)
     {if(param[1] === Not_a_tuple)
       {var v0=param[2],v0$0=of_a$0(v0);return [1,[0,_P_,[0,v0$0,0]]]}
      throw [0,Assert_failure,_Q_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Not_a_tuple,_O_);
    function deconstruct_tuple_exn(t)
     {if(4 === t[0]){var ts=t[1];return ts}throw [0,Not_a_tuple,t]}
    var
     Bin_shape_lib_Bin_shape=
      [0,
       of_a$0,
       [0,of_string$2],
       [0,of_string$3],
       [0,of_string$0],
       [0,of_string$1],
       group,
       tuple$1,
       record$1,
       variant$1,
       constr,
       inherit,
       poly_variant$1,
       rec_app,
       top_app,
       var$4,
       basetype$1,
       annotate_provisionally,
       [0,compare$2,t_of_sexp$0,sexp_of_t$2,to_hex,to_md5,of_md5],
       [0,
        cmp_a,
        sexp_of_t$4,
        to_string_hum,
        to_digest$2,
        Exp,
        Def$0,
        [0,
         Create[1],
         Create[2],
         Create[3],
         Create[4],
         Create[5],
         Create[7],
         Create[6],
         Create[8],
         Create[9],
         Create[10],
         Create[11]]],
       _N_,
       eval_to_digest,
       eval_to_digest_string,
       [0,deconstruct_tuple_exn]];
    caml_register_global
     (136,Bin_shape_lib_Bin_shape,"Bin_shape_lib__Bin_shape");
    var Bin_shape_lib_Std=[0,0];
    caml_register_global(137,Bin_shape_lib_Std,"Bin_shape_lib__Std");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaW5fc2hhcGVfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
