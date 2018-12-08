(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_sys_getenv=runtime.caml_sys_getenv,
     caml_sys_time=runtime.caml_sys_time,
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_inline_tests_runner_exe=caml_new_string("inline_tests_runner.exe"),
     cst$10=caml_new_string(""),
     cst$8=caml_new_string("\n"),
     cst$9=caml_new_string(" "),
     cst$7=caml_new_string(""),
     cst_ppx_inline_test_cannot_use_list_partition_or_partition_without_specifying_a_partition_at_preprocessing_time=
      caml_new_string
       ("ppx_inline_test: cannot use -list-partition or -partition without specifying a partition at preprocessing time"),
     cst$5=caml_new_string("\n"),
     cst$6=caml_new_string(" "),
     cst$3=caml_new_string("\n"),
     cst_T_MODULE_at=caml_new_string("T_MODULE at "),
     cst_in_TES=caml_new_string("  in TES"),
     cst$4=caml_new_string(""),
     cst_inline_tests_log$0=caml_new_string("inline_tests.log"),
     cst_inline_tests_log=caml_new_string("inline_tests.log"),
     cst$1=caml_new_string(""),
     cst$2=caml_new_string(""),
     cst$0=caml_new_string(""),
     cst_success=caml_new_string("success"),
     cst_failure=caml_new_string("failure"),
     cst_error=caml_new_string("error"),
     enable_everything=[0,0,0],
     cst_FORCE_DROP_INLINE_TEST=caml_new_string("FORCE_DROP_INLINE_TEST"),
     cst=caml_new_string(""),
     cst_inline_test_runner=caml_new_string("inline-test-runner"),
     cst_inline_test_runner$0=caml_new_string("inline-test-runner"),
     cst_Path_to_the_root_of_the_source_tree=
      caml_new_string(" Path to the root of the source tree"),
     cst_source_tree_root=caml_new_string("-source-tree-root"),
     cst_Allow_output_patterns_in_tests_expectations=
      caml_new_string(" Allow output patterns in tests expectations"),
     cst_allow_output_patterns=caml_new_string("-allow-output-patterns"),
     cst_Diff_command_for_tests_that_require_diffing_use_to_disable_diffing=
      caml_new_string
       (" Diff command for tests that require diffing (use - to disable diffing)"),
     cst_diff_cmd=caml_new_string("-diff-cmd"),
     cst_Update_expect_tests_in_place=
      caml_new_string(" Update expect tests in place"),
     cst_in_place=caml_new_string("-in-place"),
     cst_Summarize_tests_without_using_color=
      caml_new_string(" Summarize tests without using color"),
     cst_no_color=caml_new_string("-no-color"),
     cst_location_Run_only_the_tests_specified_by_all_the_only_test_options_Locations_can_be_one_of_these_forms_file_ml_file_ml_line_number_File_file_ml_File_file_ml_line_23_File_file_ml_line_23_characters_2_3=
      caml_new_string
       ('location Run only the tests specified by all the -only-test options.\n                      Locations can be one of these forms:\n                      - file.ml\n                      - file.ml:line_number\n                      - File "file.ml"\n                      - File "file.ml", line 23\n                      - File "file.ml", line 23, characters 2-3'),
     cst_only_test=caml_new_string("-only-test"),
     cst_tag_Only_run_tests_tagged_with_tag_overrides_previous_drop_tag=
      caml_new_string
       ("tag Only run tests tagged with [tag] (overrides previous -drop-tag)"),
     cst_require_tag=caml_new_string("-require-tag"),
     cst_tag_Only_run_tests_not_tagged_with_tag_overrides_previous_require_tag=
      caml_new_string
       ("tag Only run tests not tagged with [tag] (overrides previous -require-tag)"),
     cst_drop_tag=caml_new_string("-drop-tag"),
     cst_Log_the_tests_run_in_inline_tests_log=
      caml_new_string(" Log the tests run in inline_tests.log"),
     cst_log=caml_new_string("-log"),
     cst_Show_the_number_of_tests_ran=
      caml_new_string(" Show the number of tests ran"),
     cst_show_counts=caml_new_string("-show-counts"),
     cst_End_with_an_error_if_no_tests_were_run=
      caml_new_string(" End with an error if no tests were run"),
     cst_strict=caml_new_string("-strict"),
     cst_Run_tests_only_up_to_the_first_error=
      caml_new_string(" Run tests only up to the first error"),
     cst_stop_on_error=caml_new_string("-stop-on-error"),
     cst_Show_the_tests_as_they_run=
      caml_new_string(" Show the tests as they run"),
     cst_verbose=caml_new_string("-verbose"),
     cst_Only_run_the_tests_in_the_given_partition=
      caml_new_string(" Only run the tests in the given partition"),
     cst_partition=caml_new_string("-partition"),
     cst_Lists_all_the_partitions_that_contain_at_least_one_test_or_test_module=
      caml_new_string
       (" Lists all the partitions that contain at least one test or test_module"),
     cst_list_partitions=caml_new_string("-list-partitions"),
     cst_Do_not_run_tests_but_show_what_would_have_been_run=
      caml_new_string(" Do not run tests but show what would have been run"),
     cst_list_test_names=caml_new_string("-list-test-names"),
     am_running_inline_test_env_var=
      caml_new_string("PPX_INLINE_TEST_LIB_AM_RUNNING_INLINE_TEST"),
     Stdlib_list=global_data.Stdlib__list,
     Stdlib=global_data.Stdlib,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_filename=global_data.Stdlib__filename,
     Assert_failure=global_data.Assert_failure,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_random=global_data.Stdlib__random,
     Base_Random=global_data.Base__Random,
     Failure=global_data.Failure,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_scanf=global_data.Stdlib__scanf,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_arg=global_data.Stdlib__arg,
     Not_found=global_data.Not_found,
     Stdlib_array=global_data.Stdlib__array,
     Base=global_data.Base,
     Ppx_inline_test_lib=[0,0];
    caml_register_global(92,Ppx_inline_test_lib,"Ppx_inline_test_lib");
    var
     _z_=[0,[12,32,[2,0,[12,58,[4,0,0,0,0]]]],caml_new_string(" %s:%d")],
     _A_=[0,[12,32,[2,0,0]],caml_new_string(" %s")],
     _v_=
      [0,
       [11,
        caml_new_string
         ("inline_tests_runner.exe is not supposed to be run by hand, you \nshould run the inline_tests_runner script instead.\n"),
        [10,0]],
       caml_new_string
        ("inline_tests_runner.exe is not supposed to be run by hand, you \nshould run the inline_tests_runner script instead.\n%!")],
     _w_=
      [0,
       [11,
        caml_new_string
         ("You are doing something unexpected with the tests. No tests have \nbeen run. You should use the inline_tests_runner script to run \ntests.\n"),
        [10,0]],
       caml_new_string
        ("You are doing something unexpected with the tests. No tests have \nbeen run. You should use the inline_tests_runner script to run \ntests.\n%!")],
     _H_=[0,[2,0,[12,10,0]],caml_new_string("%s\n")],
     _x_=
      [0,
       [4,
        0,
        0,
        0,
        [11,
         caml_new_string(" tests ran, "),
         [4,0,0,0,[11,caml_new_string(" test_modules ran\n"),[10,0]]]]],
       caml_new_string("%d tests ran, %d test_modules ran\n%!")],
     _D_=[0,caml_new_string("runtime-lib/runtime.ml"),582,65],
     _y_=
      [0,
       [11,
        caml_new_string
         ("ppx_inline_test error: the following -only-test flags matched nothing:"),
        0],
       caml_new_string
        ("ppx_inline_test error: the following -only-test flags matched nothing:")],
     _B_=[0,[11,caml_new_string(".\n"),[10,0]],caml_new_string(".\n%!")],
     _C_=
      [0,
       [11,
        caml_new_string("ppx_inline_test error: no tests have been run.\n"),
        [10,0]],
       caml_new_string("ppx_inline_test error: no tests have been run.\n%!")],
     _F_=[0,[11,caml_new_string("T_MODULES"),0],caml_new_string("T_MODULES")],
     _G_=
      [0,
       [11,caml_new_string(", "),[4,0,0,0,[11,caml_new_string(" TES"),0]]],
       caml_new_string(", %d TES")],
     _E_=
      [0,
       [11,
        caml_new_string("FAILED "),
        [4,
         0,
         0,
         0,
         [11,
          caml_new_string(" / "),
          [4,0,0,0,[11,caml_new_string(" tests"),[2,0,[12,10,[10,0]]]]]]]],
       caml_new_string("FAILED %d / %d tests%s\n%!")],
     _t_=
      [0,
       [11,
        caml_new_string("T_MODULE at "),
        [2,
         0,
         [11,
          caml_new_string(" threw"),
          [2,0,[2,0,[11,caml_new_string(".\n"),[2,0,[2,0,[12,10,[10,0]]]]]]]]]],
       caml_new_string("T_MODULE at %s threw%s%s.\n%s%s\n%!")],
     _u_=[0,[11,caml_new_string("TES"),0],caml_new_string("TES")],
     _q_=
      [0,
       [11,
        caml_new_string(" ("),
        [8,0,0,[0,3],[11,caml_new_string(" sec)\n"),[10,0]]]],
       caml_new_string(" (%.3f sec)\n%!")],
     _o_=[0,[2,0,[12,10,[2,0,0]]],caml_new_string("%s\n%s")],
     _p_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _s_=
      [0,
       [2,0,[11,caml_new_string(" is false.\n"),[2,0,[12,10,[10,0]]]]],
       caml_new_string("%s is false.\n%s\n%!")],
     _r_=
      [0,
       [2,
        0,
        [11,
         caml_new_string(" threw"),
         [2,0,[2,0,[11,caml_new_string(".\n"),[2,0,[2,0,[12,10,[10,0]]]]]]]]],
       caml_new_string("%s threw%s%s.\n%s%s\n%!")],
     _n_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _m_=[0,[2,0,[10,0]],caml_new_string("%s%!")],
     _l_=[0,[12,10,[2,0,[12,10,[10,0]]]],caml_new_string("\n%s\n%!")],
     _P_=
      [0,
       [11,
        caml_new_string("Argument "),
        [2,
         0,
         [11,
          caml_new_string(" doesn't fit the format filename[:line_number]\n"),
          [10,0]]]],
       caml_new_string
        ("Argument %s doesn't fit the format filename[:line_number]\n%!")],
     _L_=
      [0,
       [2,
        0,
        [11,
         caml_new_string(": unexpected anonymous argument "),
         [2,0,[12,10,[10,0]]]]],
       caml_new_string("%s: unexpected anonymous argument %s\n%!")],
     _g_=
      [0,
       [11,
        caml_new_string(" File "),
        [3,
         0,
         [11,
          caml_new_string(" , line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_new_string(" , characters "),
            [4,0,0,0,[11,caml_new_string(" - "),[4,0,0,0,[12,32,[10,0]]]]]]]]]],
       caml_new_string(" File %S , line %d , characters %d - %d %!")],
     _f_=
      [0,
       [11,
        caml_new_string(" File "),
        [3,0,[11,caml_new_string(" , line "),[4,0,0,0,[12,32,[10,0]]]]]],
       caml_new_string(" File %S , line %d %!")],
     _e_=
      [0,
       [11,caml_new_string(" File "),[3,0,[12,32,[10,0]]]],
       caml_new_string(" File %S %!")],
     _d_=
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
            [4,0,0,0,[12,45,[4,0,0,0,[2,0,0]]]]]]]]],
       caml_new_string("File %S, line %d, characters %d-%d%s")],
     _a_=[0,[2,0,0],caml_new_string("%s")],
     _b_=[0,[2,0,0],caml_new_string("%s")],
     _K_=
      [0,
       [2,0,[12,32,[2,0,[12,32,[2,0,[11,caml_new_string(" [args]"),0]]]]]],
       caml_new_string("%s %s %s [args]")],
     _I_=[0,caml_new_string("runtime-lib/runtime.ml"),313,18];
    function to_string(param)
     {switch(param)
       {case 0:return cst_success;
        case 1:return cst_failure;
        default:return cst_error}}
    function combine(t1,t2)
     {switch(t1)
       {case 0:if(0 === t2)return 0;var switch$0=0;break;
        case 1:var switch$0=0;break;
        default:var switch$0=1}
      if(! switch$0)if(2 !== t2)return 1;
      return 2}
    function combine_all(ts){return caml_call3(Stdlib_list[20],combine,0,ts)}
    var
     test_modules_ran=[0,0],
     test_modules_failed=[0,0],
     tests_ran=[0,0],
     tests_failed=[0,0],
     dynamic_lib=[0,0];
    function entire_module_disabled(t,tags)
     {var _bQ_=t[2];
      function _bR_(dropped){return caml_call2(Stdlib_list[31],dropped,tags)}
      return caml_call2(Stdlib_list[28],_bR_,_bQ_)}
    function disabled(t,tags)
     {var _bL_=t[1];
      function _bM_(req){return 1 - caml_call2(Stdlib_list[31],req,tags)}
      var _bN_=caml_call2(Stdlib_list[28],_bM_,_bL_);
      if(_bN_)return _bN_;
      var _bO_=t[2];
      function _bP_(dropped){return caml_call2(Stdlib_list[31],dropped,tags)}
      return caml_call2(Stdlib_list[28],_bP_,_bO_)}
    var action=[0,-950194894];
    try
     {caml_sys_getenv(cst_FORCE_DROP_INLINE_TEST);var _Y_=1,force_drop=_Y_}
    catch(_bK_)
     {_bK_ = caml_wrap_exception(_bK_);
      if(_bK_ !== Not_found)throw _bK_;
      var force_drop=0}
    function get(param){return force_drop?-950194894:action[1]}
    function set(v){action[1] = v;return 0}
    var _c_=caml_call2(Stdlib_hashtbl[1],0,23),current=[0,cst];
    function found_test(param)
     {var
       _bI_=caml_string_notequal(current[1],cst$0),
       _bJ_=_bI_?1 - caml_call2(Stdlib_hashtbl[9],_c_,current[1]):_bI_;
      return _bJ_?caml_call3(Stdlib_hashtbl[5],_c_,current[1],0):_bJ_}
    function is_current(param)
     {if(param){var p=param[1];return caml_string_equal(p,current[1])}
      return 1}
    var current$0=[0,0];
    function current_tags(param)
     {var _bH_=current$0[1];
      function _bF_(m){return m[2]}
      var _bG_=caml_call2(Stdlib_list[17],_bF_,_bH_);
      return caml_call1(Stdlib_list[13],_bG_)}
    var
     verbose=[0,0],
     strict=[0,0],
     show_counts=[0,0],
     list_test_names=[0,0],
     delayed_errors=[0,0],
     stop_on_error=[0,0],
     log=[0,0],
     time_sec=[0,0],
     use_color=[0,1],
     in_place=[0,0],
     diff_command=[0,0],
     source_tree_root=[0,0],
     allow_output_patterns=[0,0];
    function displayed_descr(descr,filename,line,start_pos,end_pos)
     {return caml_call6
              (Stdlib_printf[4],_d_,filename,line,start_pos,end_pos,descr)}
    function backtrace_indented(by)
     {var str=caml_call1(Stdlib_printexc[5],0);
      if(caml_string_notequal(str,cst$1))
       {var
         len=caml_ml_string_length(str),
         buf=caml_call1(Stdlib_buffer[1],len * 2 | 0),
         indentation=caml_call2(Stdlib_string[1],by,32);
        caml_call2(Stdlib_buffer[14],buf,indentation);
        var _bA_=len - 1 | 0,_bz_=0;
        if(! (_bA_ < 0))
         {var i=_bz_;
          for(;;)
           {var _bB_=caml_string_get(str,i);
            caml_call2(Stdlib_buffer[10],buf,_bB_);
            var
             _bC_=10 === caml_string_get(str,i)?1:0,
             _bD_=_bC_?i !== (len - 1 | 0)?1:0:_bC_;
            if(_bD_)caml_call2(Stdlib_buffer[14],buf,indentation);
            var _bE_=i + 1 | 0;
            if(_bA_ !== i){var i=_bE_;continue}
            break}}
        return caml_call1(Stdlib_buffer[2],buf)}
      return cst$2}
    var match=caml_call1(Stdlib_array[11],Stdlib_sys[1]);
    if(match)
     {var _h_=match[2];
      if(_h_)
       {var _i_=match[1];
        if(caml_string_notequal(_h_[1],cst_inline_test_runner))
         var switch$0=0;
        else
         {var _J_=_h_[2];
          if(_J_)
           {var rest=_J_[2],lib=_J_[1];
            if(Base[193][7])
             {var
               tests=[0,0],
               list_partitions=[0,0],
               partition=[0,0],
               tag_predicate=[0,enable_everything],
               msg$1=
                caml_call4
                 (Stdlib_printf[4],_K_,_i_,cst_inline_test_runner$0,lib),
               f=
                function(anon)
                 {caml_call3(Stdlib_printf[3],_L_,_i_,anon);
                  return caml_call1(Stdlib[88],1)},
               _M_=0,
               _N_=
                [0,
                 [0,
                  cst_allow_output_patterns,
                  [2,allow_output_patterns],
                  cst_Allow_output_patterns_in_tests_expectations],
                 [0,
                  [0,
                   cst_source_tree_root,
                   [4,function(s){source_tree_root[1] = [0,s];return 0}],
                   cst_Path_to_the_root_of_the_source_tree],
                  _M_]],
               _O_=
                [0,
                 [0,
                  cst_no_color,
                  [3,use_color],
                  cst_Summarize_tests_without_using_color],
                 [0,
                  [0,
                   cst_in_place,
                   [2,in_place],
                   cst_Update_expect_tests_in_place],
                  [0,
                   [0,
                    cst_diff_cmd,
                    [4,function(s){diff_command[1] = [0,s];return 0}],
                    cst_Diff_command_for_tests_that_require_diffing_use_to_disable_diffing],
                   _N_]]],
               _Q_=
                [0,
                 [0,
                  cst_only_test,
                  [4,
                   function(filename)
                    {try
                      {var
                        _bs_=
                         function(file,line,start_pos,end_pos)
                          {return [0,file,[0,line]]},
                        _bt_=[0,caml_call3(Stdlib_scanf[4],filename,_g_,_bs_)],
                        match=_bt_}
                     catch(_bw_)
                      {try
                        {var
                          _bq_=function(file,line){return [0,file,[0,line]]},
                          _br_=[0,caml_call3(Stdlib_scanf[4],filename,_f_,_bq_)],
                          match=_br_}
                       catch(_bx_)
                        {try
                          {var
                            _bo_=function(file){return [0,file,0]},
                            _bp_=[0,caml_call3(Stdlib_scanf[4],filename,_e_,_bo_)],
                            match=_bp_}
                         catch(_by_){var match=0}}}
                     if(match)
                      var
                       match$0=match[1],
                       index=match$0[2],
                       file=match$0[1],
                       filename$0=file,
                       index$0=index;
                     else
                      if(caml_call2(Stdlib_string[22],filename,58))
                       {var
                         i=caml_call2(Stdlib_string[14],filename,58),
                         filename$1=caml_call3(Stdlib_string[4],filename,0,i),
                         index_string=
                          caml_call3
                           (Stdlib_string[4],
                            filename,
                            i + 1 | 0,
                            (caml_ml_string_length(filename) - i | 0) - 1 | 0);
                        try
                         {var
                           _bu_=runtime.caml_int_of_string(index_string),
                           index$1=_bu_}
                        catch(_bv_)
                         {_bv_ = caml_wrap_exception(_bv_);
                          if(_bv_[1] !== Failure)throw _bv_;
                          caml_call2(Stdlib_printf[3],_P_,filename);
                          var index$1=caml_call1(Stdlib[88],1)}
                        var filename$0=filename$1,index$0=[0,index$1]}
                      else
                       var filename$0=filename,index$0=0;
                     tests[1] = [0,[0,filename$0,index$0,[0,0]],tests[1]];
                     return 0}],
                  cst_location_Run_only_the_tests_specified_by_all_the_only_test_options_Locations_can_be_one_of_these_forms_file_ml_file_ml_line_number_File_file_ml_File_file_ml_line_23_File_file_ml_line_23_characters_2_3],
                 _O_],
               _R_=
                [0,
                 [0,
                  cst_require_tag,
                  [4,
                   function(s)
                    {var _bm_=tag_predicate[1],_bj_=_bm_[2];
                     function _bk_(_bn_){return caml_string_notequal(s,_bn_)}
                     var _bl_=caml_call2(Stdlib_list[35],_bk_,_bj_);
                     tag_predicate[1] = [0,[0,s,_bm_[1]],_bl_];
                     return 0}],
                  cst_tag_Only_run_tests_tagged_with_tag_overrides_previous_drop_tag],
                 _Q_],
               _S_=
                [0,
                 [0,
                  cst_drop_tag,
                  [4,
                   function(s)
                    {var _bh_=tag_predicate[1],_be_=[0,s,_bh_[2]],_bf_=_bh_[1];
                     function _bg_(_bi_){return caml_string_notequal(s,_bi_)}
                     tag_predicate[1]
                     =
                     [0,caml_call2(Stdlib_list[35],_bg_,_bf_),_be_];
                     return 0}],
                  cst_tag_Only_run_tests_not_tagged_with_tag_overrides_previous_require_tag],
                 _R_],
               _T_=
                [0,
                 [0,cst_verbose,[2,verbose],cst_Show_the_tests_as_they_run],
                 [0,
                  [0,
                   cst_stop_on_error,
                   [2,stop_on_error],
                   cst_Run_tests_only_up_to_the_first_error],
                  [0,
                   [0,
                    cst_strict,
                    [2,strict],
                    cst_End_with_an_error_if_no_tests_were_run],
                   [0,
                    [0,
                     cst_show_counts,
                     [2,show_counts],
                     cst_Show_the_number_of_tests_ran],
                    [0,
                     [0,
                      cst_log,
                      [0,
                       function(param)
                        {try
                          {runtime.caml_sys_remove(cst_inline_tests_log$0)}
                         catch(_bd_){}
                         log[1] = [0,caml_call1(Stdlib[49],cst_inline_tests_log)];
                         return 0}],
                      cst_Log_the_tests_run_in_inline_tests_log],
                     _S_]]]]],
               _U_=
                [0,
                 [0,
                  cst_partition,
                  [4,function(i){partition[1] = [0,i];return 0}],
                  cst_Only_run_the_tests_in_the_given_partition],
                 _T_],
               _V_=
                [0,
                 [0,
                  cst_list_partitions,
                  [0,function(param){list_partitions[1] = 1;return 0}],
                  cst_Lists_all_the_partitions_that_contain_at_least_one_test_or_test_module],
                 _U_],
               _W_=
                [0,
                 [0,
                  cst_list_test_names,
                  [0,
                   function(param)
                    {list_test_names[1] = 1;verbose[1] = 1;return 0}],
                  cst_Do_not_run_tests_but_show_what_would_have_been_run],
                 _V_],
               l=caml_call2(Stdlib_arg[11],0,_W_),
               argv=caml_call1(Stdlib_array[12],[0,_i_,rest]);
              try
               {caml_call5(Stdlib_arg[3],0,argv,l,f,msg$1)}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                if(exn[1] === Stdlib_arg[8])
                 {var msg=exn[2];
                  caml_call2(Stdlib_printf[3],_a_,msg);
                  caml_call1(Stdlib[88],1)}
                else
                 {if(exn[1] !== Stdlib_arg[7])throw exn;
                  var msg$0=exn[2];
                  caml_call2(Stdlib_printf[2],_b_,msg$0);
                  caml_call1(Stdlib[88],0)}}
              var
               _X_=
                list_partitions[1]?-260537174:[0,1025081494,partition[1]];
              set([0,-753295984,[0,[0,lib,tests[1],tag_predicate[1]],_X_]]);
              var switch$0=1}
            else
             var switch$0=0}
          else
           var switch$0=0}}
      else
       var switch$0=0}
    else
     var switch$0=0;
    var match$0=get(0);
    if(typeof match$0 === "number")
     var _j_=0;
    else
     {if(984731018 <= match$0[1])throw [0,Assert_failure,_I_];var _j_=1}
    if(_j_)
     var _k_=_j_;
    else
     {try
       {caml_sys_getenv(am_running_inline_test_env_var);var switch$1=0}
      catch(_bc_)
       {_bc_ = caml_wrap_exception(_bc_);
        if(_bc_ !== Not_found)throw _bc_;
        var _k_=0,switch$1=1}
      if(! switch$1)var _k_=1}
    function time_without_resetting_random_seeds(f)
     {var before_sec=caml_sys_time(0);
      try
       {var res=caml_call1(f,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        time_sec[1] = caml_sys_time(0) - before_sec;
        throw e}
      time_sec[1] = caml_sys_time(0) - before_sec;
      return res}
    var
     saved_caml_random_state=caml_call1(Stdlib_random[11][1],[0,100,200,300]),
     saved_base_random_state=caml_call1(Base_Random[16][2],[0,111,222,333]);
    function time_and_reset_random_seeds(f)
     {var
       caml_random_state=caml_call1(Stdlib_random[12],0),
       base_random_state=caml_call1(Base_Random[16][4],Base_Random[16][1]);
      caml_call1(Stdlib_random[13],saved_caml_random_state);
      caml_call1(Base_Random[17],saved_base_random_state);
      var result=time_without_resetting_random_seeds(f);
      caml_call1(Stdlib_random[13],caml_random_state);
      caml_call1(Base_Random[17],base_random_state);
      return result}
    function string_of_module_descr(param)
     {var _a8_=current$0[1];
      function _a6_(m){return m[1]}
      var _a7_=caml_call2(Stdlib_list[17],_a6_,_a8_);
      function _a9_(s)
       {var
         _a$_=caml_call1(Stdlib_string[32],s),
         _ba_=caml_call2(Stdlib[17],_a$_,cst$3),
         _bb_=caml_call2(Stdlib[17],cst_T_MODULE_at,_ba_);
        return caml_call2(Stdlib[17],cst_in_TES,_bb_)}
      var _a__=caml_call2(Stdlib_list[17],_a9_,_a7_);
      return caml_call2(Stdlib_string[7],cst$4,_a__)}
    function position_match(def_filename,def_line_number,l)
     {function _a0_(param)
       {var
         used=param[3],
         line_number_opt=param[2],
         filename=param[1],
         position_start=
          caml_ml_string_length(def_filename)
          -
          caml_ml_string_length(filename)
          |
          0,
         _a1_=0 <= position_start?1:0;
        if(_a1_)
         {var
           end_of_def_filename=
            caml_call3
             (Stdlib_string[4],
              def_filename,
              position_start,
              caml_ml_string_length(filename)),
           _a2_=caml_string_equal(end_of_def_filename,filename);
          if(_a2_)
           {var
             _a3_=0 === position_start?1:0,
             _a4_=
              _a3_
              ||
              (47 === caml_string_get(def_filename,position_start - 1 | 0)?1:0);
            if(_a4_)
             if(line_number_opt)
              var
               line_number=line_number_opt[1],
               _a5_=caml_equal(def_line_number,line_number);
             else
              var _a5_=1;
            else
             var _a5_=_a4_}
          else
           var _a5_=_a2_;
          var found=_a5_}
        else
         var found=_a1_;
        if(found)used[1] = 1;
        return found}
      return caml_call2(Stdlib_list[28],_a0_,l)}
    function print_delayed_errors(param)
     {var delayed_errors$0=caml_call1(Stdlib_list[9],delayed_errors[1]);
      if(delayed_errors$0)
       {var _aY_=caml_call2(Stdlib_string[1],70,61);
        caml_call2(Stdlib_printf[3],_l_,_aY_);
        var
         _aZ_=
          function(message){return caml_call2(Stdlib_printf[3],_m_,message)};
        return caml_call2(Stdlib_list[15],_aZ_,delayed_errors$0)}
      return 0}
    function eprintf_or_delay(fmt)
     {function _aW_(s)
       {if(verbose[1])
         delayed_errors[1] = [0,s,delayed_errors[1]];
        else
         caml_call2(Stdlib_printf[3],_n_,s);
        var _aX_=stop_on_error[1];
        return _aX_?(print_delayed_errors(0),caml_call1(Stdlib[88],2)):_aX_}
      return caml_call2(Stdlib_printf[9],_aW_,fmt)}
    function add_hooks(C,f,param){caml_call1(C[1],0);return caml_call1(f,0)}
    function test
     (config,descr,tags,def_filename,def_line_number,start_pos,end_pos,f)
     {function f$0(_aV_){return add_hooks(config,f,_aV_)}
      function descr$0(param)
       {return displayed_descr
                (descr,def_filename,def_line_number,start_pos,end_pos)}
      var match=get(0);
      if(typeof match === "number")return 0;
      if(984731018 <= match[1])
       {var r=match[2],_aF_=r[1];
        r[1]
        =
        [0,
         function(param)
          {var _aT_=1 - time_and_reset_random_seeds(f$0);
           if(_aT_){var _aU_=descr$0(0);return caml_call1(Stdlib[3],_aU_)}
           return _aT_},
         _aF_];
        return 0}
      var
       _aG_=match[2],
       what_to_do=_aG_[2],
       match$0=_aG_[1],
       which_tags=match$0[3],
       only_test_location=match$0[2],
       libname=match$0[1],
       _aH_=current_tags(0),
       complete_tags=caml_call2(Stdlib[26],tags,_aH_),
       _aI_=caml_equal([0,libname],dynamic_lib[1]);
      if(_aI_)
       var
        _aJ_=
         only_test_location
          ?position_match(def_filename,def_line_number,only_test_location)
          :1,
        should_run=_aJ_?1 - disabled(which_tags,complete_tags):_aJ_;
      else
       var should_run=_aI_;
      if(should_run)
       {if(typeof what_to_do === "number")return found_test(0);
        var partition=what_to_do[2],_aK_=is_current(partition);
        if(_aK_)
         {var descr$1=descr$0(0);
          tests_ran[1]++;
          var _aL_=log[1];
          if(_aL_)
           {var ch=_aL_[1],_aM_=string_of_module_descr(0);
            caml_call4(Stdlib_printf[1],ch,_o_,descr$1,_aM_)}
          if(verbose[1])caml_call2(Stdlib_printf[2],_p_,descr$1);
          var
           print_time_taken=
            function(param)
             {var _aS_=verbose[1];
              return _aS_?caml_call2(Stdlib_printf[2],_q_,time_sec[1]):_aS_};
          try
           {var
             _aO_=1 - list_test_names[1],
             failed=_aO_?1 - time_and_reset_random_seeds(f$0):_aO_;
            print_time_taken(0);
            if(failed)
             {tests_failed[1]++;
              var
               _aP_=string_of_module_descr(0),
               _aQ_=caml_call2(eprintf_or_delay(_s_),descr$1,_aP_)}
            else
             var _aQ_=failed;
            return _aQ_}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            print_time_taken(0);
            var backtrace=backtrace_indented(2);
            tests_failed[1]++;
            var
             exn_str=caml_call1(Stdlib_printexc[1],exn),
             sep=caml_call2(Stdlib_string[22],exn_str,10)?cst$5:cst$6,
             _aN_=string_of_module_descr(0);
            return caml_call5
                    (eprintf_or_delay(_r_),descr$1,sep,exn_str,backtrace,_aN_)}}
        var _aR_=_aK_}
      else
       var _aR_=should_run;
      return _aR_}
    function set_lib_and_partition(static_lib,partition)
     {if(dynamic_lib[1])return 0;
      dynamic_lib[1] = [0,static_lib];
      var match=get(0);
      if(typeof match !== "number")
       if(! (984731018 <= match[1]))
        {var
          match$0=match[2],
          what_to_do=match$0[2],
          which_tests=match$0[1],
          _aE_=caml_string_equal(which_tests[1],static_lib);
         if(_aE_)
          {if(typeof what_to_do === "number")
            var switch$0=0;
           else
            if(what_to_do[2])
             var switch$0=0;
            else
             var requires_partition=0,switch$0=1;
           if(! switch$0)var requires_partition=1;
           if(caml_string_equal(partition,cst$7))
            if(requires_partition)
             return caml_call1
                     (Stdlib[3],
                      cst_ppx_inline_test_cannot_use_list_partition_or_partition_without_specifying_a_partition_at_preprocessing_time);
           current[1] = partition;
           return 0}
         return _aE_}
      return 0}
    function unset_lib(static_lib)
     {var _aB_=dynamic_lib[1];
      if(_aB_)
       {var
         lib=_aB_[1],
         _aC_=caml_string_equal(lib,static_lib),
         _aD_=_aC_?(dynamic_lib[1] = 0,0):_aC_;
        return _aD_}
      return 0}
    function test_unit
     (config,descr,tags,filename,line_number,start_pos,end_pos,f)
     {return test
              (config,
               descr,
               tags,
               filename,
               line_number,
               start_pos,
               end_pos,
               function(param){caml_call1(f,0);return 1})}
    function collect(f)
     {var prev_action=get(0),tests=[0,0];
      set([0,984731018,tests]);
      try
       {caml_call1(f,0);
        var tests$0=caml_call1(Stdlib_list[9],tests[1]);
        set(prev_action);
        return tests$0}
      catch(e){e = caml_wrap_exception(e);set(prev_action);throw e}}
    function test_module
     (config,descr,tags,def_filename,def_line_number,start_pos,end_pos,f)
     {function f$0(_aA_){return add_hooks(config,f,_aA_)}
      function descr$0(param)
       {return displayed_descr
                (descr,def_filename,def_line_number,start_pos,end_pos)}
      var match=get(0);
      if(typeof match === "number")return 0;
      if(984731018 <= match[1])
       {var r=match[2],_ar_=r[1],_as_=collect(f$0);
        r[1] = caml_call2(Stdlib_list[12],_as_,_ar_);
        return 0}
      var
       _at_=match[2],
       what_to_do=_at_[2],
       match$0=_at_[1],
       which_tags=match$0[3],
       libname=match$0[1],
       _au_=current_tags(0),
       partial_tags=caml_call2(Stdlib[26],tags,_au_),
       _av_=caml_equal([0,libname],dynamic_lib[1]),
       should_run=
        _av_?1 - entire_module_disabled(which_tags,partial_tags):_av_;
      if(should_run)
       {if(typeof what_to_do === "number")return found_test(0);
        var partition=what_to_do[2],_aw_=is_current(partition);
        if(_aw_)
         {test_modules_ran[1]++;
          var descr$1=descr$0(0);
          try
           {var
             f$1=
              function(param){return time_without_resetting_random_seeds(f$0)},
             prev=current$0[1];
            current$0[1] = [0,[0,descr$1,tags],prev];
            try
             {f$1(0);current$0[1] = prev;var _aq_=0;return _aq_}
            catch(e){e = caml_wrap_exception(e);current$0[1] = prev;throw e}}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var backtrace=backtrace_indented(2);
            test_modules_failed[1]++;
            var
             exn_str=caml_call1(Stdlib_printexc[1],exn),
             sep=caml_call2(Stdlib_string[22],exn_str,10)?cst$8:cst$9,
             _ax_=string_of_module_descr(0),
             _ay_=caml_call1(Stdlib_string[32],descr$1);
            return caml_call5
                    (eprintf_or_delay(caml_call2(Stdlib[87],_u_,_t_)),
                     _ay_,
                     sep,
                     exn_str,
                     backtrace,
                     _ax_)}}
        var _az_=_aw_}
      else
       var _az_=should_run;
      return _az_}
    function summarize(param)
     {var action=get(0);
      if(typeof action === "number")
       {if(runtime.caml_notequal(Stdlib_sys[1],[0]))
         var
          _ae_=runtime.caml_check_bound(Stdlib_sys[1],0)[1],
          switch$0=
           caml_string_equal
             (caml_call1(Stdlib_filename[12],_ae_),
              cst_inline_tests_runner_exe)
            ?(caml_call1(Stdlib_printf[3],_v_),1)
            :0;
        else
         var switch$0=0;
        if(! switch$0)caml_call1(Stdlib_printf[3],_w_);
        return 2}
      if(! (984731018 <= action[1]))
       if(-260537174 === action[2][2])
        {var
          _aa_=0,
          _ab_=function(k,param,acc){return [0,k,acc]},
          _ac_=caml_call3(Stdlib_hashtbl[14],_ab_,_c_,_aa_),
          _ad_=caml_call2(Stdlib_list[48],Stdlib_string[33],_ac_),
          _ap_=caml_call1(Stdlib_printf[2],_H_);
         caml_call2(Stdlib_list[15],_ap_,_ad_);
         return 0}
      var _af_=log[1];
      if(_af_){var ch=_af_[1];caml_call1(Stdlib[65],ch)}
      print_delayed_errors(0);
      var _ag_=tests_failed[1],_ah_=test_modules_failed[1];
      if(0 === _ag_)
       if(0 === _ah_)
        {if(show_counts[1])
          caml_call3(Stdlib_printf[3],_x_,tests_ran[1],test_modules_ran[1]);
         if(984731018 <= action[1])
          var errors=0;
         else
          {var _aj_=action[2],_ak_=_aj_[1][2];
           if(typeof _aj_[2] === "number")throw [0,Assert_failure,_D_];
           var
            _al_=function(param){var used=param[3];return 1 - used[1]},
            unused_tests=caml_call2(Stdlib_list[35],_al_,_ak_),
            _am_=unused_tests?[0,unused_tests]:0,
            errors=_am_}
         if(errors)
          {var tests=errors[1];
           caml_call1(Stdlib_printf[3],_y_);
           var
            _ai_=
             function(param)
              {var line_number_opt=param[2],filename=param[1];
               if(line_number_opt)
                {var line_number=line_number_opt[1];
                 return caml_call3(Stdlib_printf[3],_z_,filename,line_number)}
               return caml_call2(Stdlib_printf[3],_A_,filename)};
           caml_call2(Stdlib_list[15],_ai_,tests);
           caml_call1(Stdlib_printf[3],_B_);
           return 2}
         if(0 === tests_ran[1])
          if(strict[1]){caml_call1(Stdlib_printf[3],_C_);return 2}
         return 0}
      if(0 === _ah_)
       var _an_=cst$10;
      else
       var
        _ao_=caml_call2(Stdlib[87],_G_,_F_),
        _an_=caml_call2(Stdlib_printf[4],_ao_,_ah_);
      caml_call4(Stdlib_printf[3],_E_,_ag_,tests_ran[1],_an_);
      return 1}
    var
     use_color$0=use_color[1],
     in_place$0=in_place[1],
     diff_command$0=diff_command[1],
     source_tree_root$0=source_tree_root[1],
     allow_output_patterns$0=allow_output_patterns[1],
     evaluators=[0,[0,summarize,0]];
    function add_evaluator(f){evaluators[1] = [0,f,evaluators[1]];return 0}
    function exit(param)
     {var _Z_=caml_call1(Stdlib_list[9],evaluators[1]);
      function ___(f){return caml_call1(f,0)}
      var param$0=combine_all(caml_call2(Stdlib_list[17],___,_Z_));
      switch(param$0)
       {case 0:var _$_=0;break;case 1:var _$_=2;break;default:var _$_=1}
      return caml_call1(Stdlib[88],_$_)}
    var
     Ppx_inline_test_lib_Runtime=
      [0,
       [0,combine,combine_all,to_string],
       set_lib_and_partition,
       unset_lib,
       test,
       test_unit,
       test_module,
       summarize,
       collect,
       _j_,
       use_color$0,
       in_place$0,
       diff_command$0,
       source_tree_root$0,
       allow_output_patterns$0,
       _k_,
       am_running_inline_test_env_var,
       add_evaluator,
       exit];
    caml_register_global
     (111,Ppx_inline_test_lib_Runtime,"Ppx_inline_test_lib__Runtime");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwcHhfaW5saW5lX3Rlc3RfbGliLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
