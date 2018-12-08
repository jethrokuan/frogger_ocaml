(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_dim_2=runtime.caml_ba_dim_2,
     caml_ba_get_1=runtime.caml_ba_get_1,
     caml_ba_set_1=runtime.caml_ba_set_1,
     caml_ba_uint8_get16=runtime.caml_ba_uint8_get16,
     caml_ba_uint8_get32=runtime.caml_ba_uint8_get32,
     caml_ba_uint8_get64=runtime.caml_ba_uint8_get64,
     caml_ba_uint8_set16=runtime.caml_ba_uint8_set16,
     caml_ba_uint8_set32=runtime.caml_ba_uint8_set32,
     caml_ba_uint8_set64=runtime.caml_ba_uint8_set64,
     caml_bswap16=runtime.caml_bswap16,
     caml_bytes_set32=runtime.caml_bytes_set32,
     caml_bytes_set64=runtime.caml_bytes_set64,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_greaterequal=runtime.caml_greaterequal,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_of_int32=runtime.caml_int64_of_int32,
     caml_int64_to_int32=runtime.caml_int64_to_int32,
     caml_lessequal=runtime.caml_lessequal,
     caml_lessthan=runtime.caml_lessthan,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_mul=runtime.caml_mul,
     caml_new_string=runtime.caml_new_string,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_get32=runtime.caml_string_get32,
     caml_string_get64=runtime.caml_string_get64;
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
     loc$2=caml_new_string("blit_buf_string"),
     cst_src_pos$2=caml_new_string("src_pos"),
     cst_dst_pos$2=caml_new_string("dst_pos"),
     cst_Bin_prot_Common_blit_buf_string_len_0=
      caml_new_string("Bin_prot.Common.blit_buf_string: len < 0"),
     cst_Bin_prot_Common_blit_buf_string_src_pos_buf_len=
      caml_new_string("Bin_prot.Common.blit_buf_string: src_pos > buf_len"),
     cst_Bin_prot_Common_blit_buf_string_src_pos_str_len=
      caml_new_string("Bin_prot.Common.blit_buf_string: src_pos > str_len"),
     cst_Bin_prot_Common_blit_buf_string_src_pos_len_buf_len=
      caml_new_string
       ("Bin_prot.Common.blit_buf_string: src_pos + len > buf_len"),
     cst_Bin_prot_Common_blit_buf_string_src_pos_len_str_len=
      caml_new_string
       ("Bin_prot.Common.blit_buf_string: src_pos + len > str_len"),
     loc$1=caml_new_string("blit_bytes_buf"),
     cst_src_pos$1=caml_new_string("src_pos"),
     cst_dst_pos$1=caml_new_string("dst_pos"),
     cst_Bin_prot_Common_blit_bytes_buf_len_0=
      caml_new_string("Bin_prot.Common.blit_bytes_buf: len < 0"),
     cst_Bin_prot_Common_blit_bytes_buf_src_pos_str_len=
      caml_new_string("Bin_prot.Common.blit_bytes_buf: src_pos > str_len"),
     cst_Bin_prot_Common_blit_bytes_buf_src_pos_buf=
      caml_new_string("Bin_prot.Common.blit_bytes_buf: src_pos > buf"),
     cst_Bin_prot_Common_blit_bytes_buf_src_pos_len_str_len=
      caml_new_string
       ("Bin_prot.Common.blit_bytes_buf: src_pos + len > str_len"),
     cst_Bin_prot_Common_blit_bytes_buf_src_pos_len_buf=
      caml_new_string("Bin_prot.Common.blit_bytes_buf: src_pos + len > buf"),
     loc$0=caml_new_string("blit_string_buf"),
     cst_src_pos$0=caml_new_string("src_pos"),
     cst_dst_pos$0=caml_new_string("dst_pos"),
     cst_Bin_prot_Common_blit_string_buf_len_0=
      caml_new_string("Bin_prot.Common.blit_string_buf: len < 0"),
     cst_Bin_prot_Common_blit_string_buf_src_pos_str_len=
      caml_new_string("Bin_prot.Common.blit_string_buf: src_pos > str_len"),
     cst_Bin_prot_Common_blit_string_buf_src_pos_buf=
      caml_new_string("Bin_prot.Common.blit_string_buf: src_pos > buf"),
     cst_Bin_prot_Common_blit_string_buf_src_pos_len_str_len=
      caml_new_string
       ("Bin_prot.Common.blit_string_buf: src_pos + len > str_len"),
     cst_Bin_prot_Common_blit_string_buf_src_pos_len_buf=
      caml_new_string("Bin_prot.Common.blit_string_buf: src_pos + len > buf"),
     loc=caml_new_string("blit_buf"),
     cst_src_pos=caml_new_string("src_pos"),
     cst_dst_pos=caml_new_string("dst_pos"),
     cst_Bin_prot_Common_blit_buf_len_0=
      caml_new_string("Bin_prot.Common.blit_buf: len < 0"),
     cst_Bin_prot_Common_blit_buf_src_pos_src_len=
      caml_new_string("Bin_prot.Common.blit_buf: src_pos > src_len"),
     cst_Bin_prot_Common_blit_buf_dst_pos_dst_len=
      caml_new_string("Bin_prot.Common.blit_buf: dst_pos > dst_len"),
     cst_Bin_prot_Common_blit_buf_src_pos_len_src_len=
      caml_new_string("Bin_prot.Common.blit_buf: src_pos + len > src_len"),
     cst_Bin_prot_Common_blit_buf_dst_pos_len_dst_len=
      caml_new_string("Bin_prot.Common.blit_buf: dst_pos + len > dst_len"),
     cst_index_out_of_bounds=caml_new_string("index out of bounds"),
     cst_concurrent_modification=caml_new_string(": concurrent modification"),
     cst_Neg_int8=caml_new_string("Neg_int8"),
     cst_Int_code=caml_new_string("Int_code"),
     cst_Int_overflow=caml_new_string("Int_overflow"),
     cst_Nat0_code=caml_new_string("Nat0_code"),
     cst_Nat0_overflow=caml_new_string("Nat0_overflow"),
     cst_Int32_code=caml_new_string("Int32_code"),
     cst_Int64_code=caml_new_string("Int64_code"),
     cst_Nativeint_code=caml_new_string("Nativeint_code"),
     cst_Unit_code=caml_new_string("Unit_code"),
     cst_Bool_code=caml_new_string("Bool_code"),
     cst_Option_code=caml_new_string("Option_code"),
     cst_String_too_long=caml_new_string("String_too_long"),
     cst_Variant_tag=caml_new_string("Variant_tag"),
     cst_Array_too_long=caml_new_string("Array_too_long"),
     cst_Hashtbl_too_long=caml_new_string("Hashtbl_too_long"),
     cst_Sum_tag=caml_new_string("Sum_tag / "),
     cst_Variant=caml_new_string("Variant / "),
     cst_Poly_rec_bound=caml_new_string("Poly_rec_bound / "),
     cst_Variant_wrong_type=caml_new_string("Variant_wrong_type / "),
     cst_Silly_type=caml_new_string("Silly_type / "),
     cst_Empty_type=caml_new_string("Empty_type / "),
     cst_Bin_prot_Common_Buffer_short=
      caml_new_string("Bin_prot.Common.Buffer_short"),
     cst_Bin_prot_Common_No_variant_match=
      caml_new_string("Bin_prot.Common.No_variant_match"),
     cst_Bin_prot_Common_Read_error=
      caml_new_string("Bin_prot.Common.Read_error"),
     cst_Bin_prot_Common_Poly_rec_write=
      caml_new_string("Bin_prot.Common.Poly_rec_write"),
     cst_Bin_prot_Common_Empty_type=
      caml_new_string("Bin_prot.Common.Empty_type"),
     cst_Bin_prot_Nat0_of_int_n_0=
      caml_new_string("Bin_prot.Nat0.of_int: n < 0"),
     cst_bin_write_hashtbl=caml_new_string("bin_write_hashtbl"),
     cst_hashtbl=caml_new_string("hashtbl"),
     cst_array=caml_new_string("array"),
     cst_list=caml_new_string("list"),
     cst_option=caml_new_string("option"),
     cst_ref=caml_new_string("ref"),
     cst_unit=caml_new_string("unit"),
     cst_bool=caml_new_string("bool"),
     cst_string=caml_new_string("string"),
     cst_bytes=caml_new_string("bytes"),
     cst_char=caml_new_string("char"),
     cst_float=caml_new_string("float"),
     cst_int=caml_new_string("int"),
     cst_int32=caml_new_string("int32"),
     cst_int63=caml_new_string("int63"),
     cst_int64=caml_new_string("int64"),
     cst_nativeint=caml_new_string("nativeint"),
     cst_nat0=caml_new_string("nat0"),
     cst_digest=caml_new_string("digest"),
     cst_float32_vec=caml_new_string("float32_vec"),
     cst_float64_vec=caml_new_string("float64_vec"),
     cst_vec=caml_new_string("vec"),
     cst_float32_mat=caml_new_string("float32_mat"),
     cst_float64_mat=caml_new_string("float64_mat"),
     cst_mat=caml_new_string("mat"),
     cst_bigstring=caml_new_string("bigstring"),
     cst_variant_int=caml_new_string("variant_int"),
     cst_int_8bit=caml_new_string("int_8bit"),
     cst_int_16bit=caml_new_string("int_16bit"),
     cst_int_32bit=caml_new_string("int_32bit"),
     cst_int_64bit=caml_new_string("int_64bit"),
     cst_int64_bits=caml_new_string("int64_bits"),
     cst_network16_int=caml_new_string("network16_int"),
     cst_network32_int=caml_new_string("network32_int"),
     cst_network32_int32=caml_new_string("network32_int32"),
     cst_network64_int=caml_new_string("network64_int"),
     cst_network64_int64=caml_new_string("network64_int64"),
     cst_bin_size_hashtbl=caml_new_string("bin_size_hashtbl"),
     cst_hashtbl$0=caml_new_string("hashtbl"),
     cst_array$0=caml_new_string("array"),
     cst_list$0=caml_new_string("list"),
     cst_triple=caml_new_string("triple"),
     cst_pair=caml_new_string("pair"),
     cst_option$0=caml_new_string("option"),
     cst_lazy=caml_new_string("lazy"),
     cst_ref$0=caml_new_string("ref"),
     cst_unit$0=caml_new_string("unit"),
     cst_bool$0=caml_new_string("bool"),
     cst_string$0=caml_new_string("string"),
     cst_bytes$0=caml_new_string("bytes"),
     cst_char$0=caml_new_string("char"),
     cst_int$0=caml_new_string("int"),
     cst_float$0=caml_new_string("float"),
     cst_int32$0=caml_new_string("int32"),
     cst_int64$0=caml_new_string("int64"),
     cst_nativeint$0=caml_new_string("nativeint"),
     cst_nat0$0=caml_new_string("nat0"),
     cst_float32_vec$0=caml_new_string("float32_vec"),
     cst_float64_vec$0=caml_new_string("float64_vec"),
     cst_vec$0=caml_new_string("vec"),
     cst_float32_mat$0=caml_new_string("float32_mat"),
     cst_float64_mat$0=caml_new_string("float64_mat"),
     cst_mat$0=caml_new_string("mat"),
     cst_bigstring$0=caml_new_string("bigstring"),
     cst_float_array=caml_new_string("float_array"),
     cst_variant_int$0=caml_new_string("variant_int"),
     cst_int_8bit$0=caml_new_string("int_8bit"),
     cst_int_16bit$0=caml_new_string("int_16bit"),
     cst_int_32bit$0=caml_new_string("int_32bit"),
     cst_int_64bit$0=caml_new_string("int_64bit"),
     cst_int64_bits$0=caml_new_string("int64_bits"),
     cst_network16_int$0=caml_new_string("network16_int"),
     cst_network32_int$0=caml_new_string("network32_int"),
     cst_network32_int32$0=caml_new_string("network32_int32"),
     cst_network64_int$0=caml_new_string("network64_int"),
     cst_network64_int64$0=caml_new_string("network64_int64"),
     cst_t$2=caml_new_string("t"),
     cst_bin_read_t$5=caml_new_string("bin_read_t"),
     cst_bin_read_t$6=caml_new_string("bin_read_t"),
     cst_bin_write_t$2=caml_new_string("bin_write_t"),
     cst_bin_size_t$2=caml_new_string("bin_size_t"),
     cst_f2112eda_e7d7_11e6_bb36_072e9ce159db=
      caml_new_string("f2112eda-e7d7-11e6-bb36-072e9ce159db"),
     cst_t$1=caml_new_string("t"),
     cst_bin_read_t$3=caml_new_string("bin_read_t"),
     cst_bin_read_t$4=caml_new_string("bin_read_t"),
     cst_bin_write_t$1=caml_new_string("bin_write_t"),
     cst_bin_size_t$1=caml_new_string("bin_size_t"),
     cst_b4e54ad2_4994_11e6_b8df_87c2997f9f52=
      caml_new_string("b4e54ad2-4994-11e6-b8df-87c2997f9f52"),
     cst_t$0=caml_new_string("t"),
     cst_bin_read_t$1=caml_new_string("bin_read_t"),
     cst_bin_read_t$2=caml_new_string("bin_read_t"),
     cst_bin_write_t$0=caml_new_string("bin_write_t"),
     cst_bin_size_t$0=caml_new_string("bin_size_t"),
     cst_ac8a9ff4_4994_11e6_9a1b_9fb4e933bd9d=
      caml_new_string("ac8a9ff4-4994-11e6-9a1b-9fb4e933bd9d"),
     cst_t=caml_new_string("t"),
     cst_bin_read_t=caml_new_string("bin_read_t"),
     cst_bin_read_t$0=caml_new_string("bin_read_t"),
     cst_bin_write_t=caml_new_string("bin_write_t"),
     cst_bin_size_t=caml_new_string("bin_size_t"),
     cst_6592371a_4994_11e6_923a_7748e4182764=
      caml_new_string("6592371a-4994-11e6-923a-7748e4182764"),
     cst_Bin_prot_Utils_Make_binable3_bin_reader_t=
      caml_new_string("Bin_prot.Utils.Make_binable3.bin_reader_t"),
     cst_Bin_prot_Utils_Make_binable2_bin_reader_t=
      caml_new_string("Bin_prot.Utils.Make_binable2.bin_reader_t"),
     cst_Bin_prot_Utils_Make_binable1_bin_reader_t=
      caml_new_string("Bin_prot.Utils.Make_binable1.bin_reader_t"),
     cst_Bin_prot_Utils_bin_dump_size_changed_during_writing=
      caml_new_string("Bin_prot.Utils.bin_dump: size changed during writing"),
     cst_Bin_prot_Blob_Ignored_t=caml_new_string("Bin_prot.Blob.Ignored.t"),
     cst_Bin_prot_Blob_Opaque_t$0=caml_new_string("Bin_prot.Blob.Opaque.t"),
     cst_Bin_prot_Blob_Opaque_t=caml_new_string("Bin_prot.Blob.Opaque.t"),
     cst_Bin_prot_Blob_t=caml_new_string("Bin_prot.Blob.t"),
     cst_85a2557e_490a_11e6_98ac_4b8953d525fe=
      caml_new_string("85a2557e-490a-11e6-98ac-4b8953d525fe"),
     cst_85a1f76e_490a_11e6_86a9_5bef585f2602=
      caml_new_string("85a1f76e-490a-11e6-86a9-5bef585f2602"),
     cst_Shape_Md5_t=caml_new_string("Shape.Md5.t"),
     cst_f6bdcdd0_9f75_11e6_9a7e_d3020428efed=
      caml_new_string("f6bdcdd0-9f75-11e6-9a7e-d3020428efed"),
     cst_float64_vec$1=caml_new_string("float64_vec"),
     cst_float32_vec$1=caml_new_string("float32_vec"),
     cst_vec$1=caml_new_string("vec"),
     cst_float64_mat$1=caml_new_string("float64_mat"),
     cst_float32_mat$1=caml_new_string("float32_mat"),
     cst_mat$1=caml_new_string("mat"),
     cst_bigstring$1=caml_new_string("bigstring"),
     cst_hashtbl$1=caml_new_string("hashtbl"),
     cst_array$1=caml_new_string("array"),
     cst_list$1=caml_new_string("list"),
     cst_option$1=caml_new_string("option"),
     cst_lazy$1=caml_new_string("lazy"),
     cst_lazy$0=caml_new_string("lazy"),
     cst_ref$1=caml_new_string("ref"),
     cst_nativeint$1=caml_new_string("nativeint"),
     cst_int64$1=caml_new_string("int64"),
     cst_int32$1=caml_new_string("int32"),
     cst_float_array$0=caml_new_string("float_array"),
     cst_float$1=caml_new_string("float"),
     cst_int$1=caml_new_string("int"),
     cst_char$1=caml_new_string("char"),
     cst_bytes$1=caml_new_string("bytes"),
     cst_string$1=caml_new_string("string"),
     cst_bool$1=caml_new_string("bool"),
     cst_unit$1=caml_new_string("unit"),
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Base=global_data.Base,
     Base_Bytes=global_data.Base__Bytes,
     Base_Printf=global_data.Base__Printf,
     Bigarray=global_data.Bigarray,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Stdlib=global_data.Stdlib,
     include=global_data.Md5_lib,
     Stdlib_list=global_data.Stdlib__list,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_obj=global_data.Stdlib__obj,
     Stdlib_lazy=global_data.Stdlib__lazy,
     Stdlib_nativeint=global_data.Stdlib__nativeint,
     Stdlib_int32=global_data.Stdlib__int32,
     include$0=global_data.Bin_shape_lib__Bin_shape,
     Stdlib_printf=global_data.Stdlib__printf,
     Bin_prot=[0,0,0,0,0,0,0,0,0,0,0,0,0];
    caml_register_global(237,Bin_prot,"Bin_prot");
    var
     sexp_of_pos=Base[218],
     Buffer_short=[248,cst_Bin_prot_Common_Buffer_short,caml_fresh_oo_id(0)],
     No_variant_match=
      [248,cst_Bin_prot_Common_No_variant_match,caml_fresh_oo_id(0)],
     _d_=
      [0,
       [11,
        caml_new_string("Bin_prot.Common."),
        [2,0,[11,caml_new_string(": "),[2,0,[11,caml_new_string(" < 0"),0]]]]],
       caml_new_string("Bin_prot.Common.%s: %s < 0")],
     _b_=[0,caml_new_string("src/common.ml.Read_error")],
     _c_=[0,caml_new_string("src/common.ml"),65,10],
     _p_=[0,caml_new_string("src/write.ml"),429,2],
     _l_=[255,0,128,0],
     _m_=[255,0,16777088,65535],
     _n_=[255,32768,0,0],
     _o_=[255,16744448,16777215,65535],
     _C_=[255,0,0,0],
     _A_=[255,16777215,255,0],
     _aK_=[255,0,128,0],
     _aL_=[255,0,16777088,65535],
     _ab_=[255,0,128,0],
     _ac_=[255,0,16777088,65535],
     _ag_=[0,[2,0,[12,46,[2,0,0]]],caml_new_string("%s.%s")],
     _ae_=
      [0,
       [11,
        caml_new_string
         ("Bin_prot.Utils.bin_read_stream: size exceeds max_size: "),
        [4,0,0,0,[11,caml_new_string(" > "),[4,0,0,0,0]]]],
       caml_new_string
        ("Bin_prot.Utils.bin_read_stream: size exceeds max_size: %d > %d")],
     _af_=
      [0,
       [11,
        caml_new_string
         ("Bin_prot.Utils.bin_read_stream: protocol lied about length of value: expected "),
        [4,0,0,0,[11,caml_new_string(", received "),[4,0,0,0,0]]]],
       caml_new_string
        ("Bin_prot.Utils.bin_read_stream: protocol lied about length of value: expected %d, received %d")],
     _ah_=
      [0,
       [2,
        0,
        [11,caml_new_string(": tried to read more elements than available"),0]],
       caml_new_string("%s: tried to read more elements than available")],
     _aj_=
      [0,
       [2,0,[11,caml_new_string(": didn't read all elements"),0]],
       caml_new_string("%s: didn't read all elements")],
     _aD_=
      [0,
       [11,
        caml_new_string("Opaque blob has "),
        [4,
         0,
         0,
         0,
         [11,caml_new_string(" bytes but [of_opaque_exn] read "),[4,0,0,0,0]]]],
       caml_new_string("Opaque blob has %d bytes but [of_opaque_exn] read %d")],
     _aC_=[0,0],
     _aB_=[0,0],
     _aA_=[0,0],
     _az_=[0,0],
     _aq_=
      [0,
       [11,
        caml_new_string("Bin_prot.Blob.bin_read_t: size ("),
        [4,0,0,0,[11,caml_new_string(") <> expected ("),[4,0,0,0,[12,41,0]]]]],
       caml_new_string("Bin_prot.Blob.bin_read_t: size (%d) <> expected (%d)")],
     _ap_=[0,caml_new_string("src/blob.ml"),17,6];
    function to_string(param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return cst_Neg_int8;
         case 1:return cst_Int_code;
         case 2:return cst_Int_overflow;
         case 3:return cst_Nat0_code;
         case 4:return cst_Nat0_overflow;
         case 5:return cst_Int32_code;
         case 6:return cst_Int64_code;
         case 7:return cst_Nativeint_code;
         case 8:return cst_Unit_code;
         case 9:return cst_Bool_code;
         case 10:return cst_Option_code;
         case 11:return cst_String_too_long;
         case 12:return cst_Variant_tag;
         case 13:return cst_Array_too_long;
         default:return cst_Hashtbl_too_long}
      else
       switch(param[0])
        {case 0:var loc=param[1];return caml_call2(Base[296],cst_Sum_tag,loc);
         case 1:
          var loc$0=param[1];return caml_call2(Base[296],cst_Variant,loc$0);
         case 2:
          var loc$1=param[1];
          return caml_call2(Base[296],cst_Poly_rec_bound,loc$1);
         case 3:
          var loc$2=param[1];
          return caml_call2(Base[296],cst_Variant_wrong_type,loc$2);
         case 4:
          var loc$3=param[1];
          return caml_call2(Base[296],cst_Silly_type,loc$3);
         default:
          var loc$4=param[1];return caml_call2(Base[296],cst_Empty_type,loc$4)}}
    var Read_error=[248,cst_Bin_prot_Common_Read_error,caml_fresh_oo_id(0)];
    function _a_(param)
     {if(param[1] === Read_error)
       {var
         v1=param[3],
         v0$0=param[2],
         v0=[0,to_string(v0$0)],
         v1$0=caml_call1(sexp_of_pos,v1);
        return [1,[0,_b_,[0,v0,[0,v1$0,0]]]]}
      throw [0,Assert_failure,_c_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Read_error,_a_);
    var
     Poly_rec_write=
      [248,cst_Bin_prot_Common_Poly_rec_write,caml_fresh_oo_id(0)],
     Empty_type=[248,cst_Bin_prot_Common_Empty_type,caml_fresh_oo_id(0)];
    function raise_read_error(err,pos){throw [0,Read_error,err,pos]}
    function raise_variant_wrong_type(name,pos)
     {throw [0,Read_error,[3,name],pos]}
    function raise_concurrent_modification(loc)
     {var _fd_=caml_call2(Base[296],loc,cst_concurrent_modification);
      return caml_call1(Base[299],_fd_)}
    function array_bound_error(param)
     {return caml_call1(Base[300],cst_index_out_of_bounds)}
    function create_buf(n)
     {return caml_call3(Bigarray[28][1],Bigarray[13],Bigarray[15],n)}
    var buf_len=caml_ba_dim_1;
    function assert_pos(pos)
     {var _fc_=caml_call2(Base[278],pos,0);
      return _fc_?array_bound_error(0):_fc_}
    function check_pos(buf,pos)
     {var _fa_=caml_ba_dim_1(buf),_fb_=caml_call2(Base[283],pos,_fa_);
      if(_fb_)throw Buffer_short;
      return _fb_}
    function safe_get_pos(buf,pos_ref)
     {var pos=pos_ref[1];check_pos(buf,pos);return pos}
    function check_next(buf,next)
     {var _e__=caml_ba_dim_1(buf),_e$_=caml_call2(Base[282],next,_e__);
      if(_e$_)throw Buffer_short;
      return _e$_}
    function get_opt_pos(loc,var$0,param)
     {if(param)
       {var pos=param[1];
        if(caml_call2(Base[278],pos,0))
         {var _e9_=caml_call3(Base_Printf[2],_d_,loc,var$0);
          caml_call1(Base[300],_e9_)}
        return pos}
      return 0}
    function blit_buf(src_pos,src,dst_pos,dst,len)
     {var
       src_pos$0=get_opt_pos(loc,cst_src_pos,src_pos),
       dst_pos$0=get_opt_pos(loc,cst_dst_pos,dst_pos);
      if(caml_call2(Base[278],len,0))
       return caml_call1(Base[300],cst_Bin_prot_Common_blit_buf_len_0);
      if(caml_call2(Base[281],len,0))
       {var _e2_=caml_ba_dim_1(src);
        if(caml_call2(Base[282],src_pos$0,_e2_))
         caml_call1(Base[300],cst_Bin_prot_Common_blit_buf_src_pos_src_len);
        var _e3_=caml_ba_dim_1(dst),_e4_=caml_call2(Base[282],dst_pos$0,_e3_);
        return _e4_
                ?caml_call1
                  (Base[300],cst_Bin_prot_Common_blit_buf_dst_pos_dst_len)
                :_e4_}
      var _e5_=caml_ba_dim_1(src),_e6_=caml_call2(Base[259],src_pos$0,len);
      if(caml_call2(Base[282],_e6_,_e5_))
       return caml_call1
               (Base[300],cst_Bin_prot_Common_blit_buf_src_pos_len_src_len);
      var _e7_=caml_ba_dim_1(dst),_e8_=caml_call2(Base[259],dst_pos$0,len);
      return caml_call2(Base[282],_e8_,_e7_)
              ?caml_call1
                (Base[300],cst_Bin_prot_Common_blit_buf_dst_pos_len_dst_len)
              :runtime.bin_prot_blit_buf_stub(src_pos$0,src,dst_pos$0,dst,len)}
    function blit_string_buf(src_pos,str,dst_pos,buf,len)
     {var
       src_pos$0=get_opt_pos(loc$0,cst_src_pos$0,src_pos),
       dst_pos$0=get_opt_pos(loc$0,cst_dst_pos$0,dst_pos);
      if(caml_call2(Base[278],len,0))
       return caml_call1(Base[300],cst_Bin_prot_Common_blit_string_buf_len_0);
      if(caml_call2(Base[281],len,0))
       {if(caml_call2(Base[282],src_pos$0,caml_ml_string_length(str)))
         caml_call1
          (Base[300],cst_Bin_prot_Common_blit_string_buf_src_pos_str_len);
        var _eX_=caml_ba_dim_1(buf),_eY_=caml_call2(Base[282],dst_pos$0,_eX_);
        return _eY_
                ?caml_call1
                  (Base[300],cst_Bin_prot_Common_blit_string_buf_src_pos_buf)
                :_eY_}
      var _eZ_=caml_call2(Base[259],src_pos$0,len);
      if(caml_call2(Base[282],_eZ_,caml_ml_string_length(str)))
       return caml_call1
               (Base[300],
                cst_Bin_prot_Common_blit_string_buf_src_pos_len_str_len);
      var _e0_=caml_ba_dim_1(buf),_e1_=caml_call2(Base[259],dst_pos$0,len);
      return caml_call2(Base[282],_e1_,_e0_)
              ?caml_call1
                (Base[300],
                 cst_Bin_prot_Common_blit_string_buf_src_pos_len_buf)
              :runtime.bin_prot_blit_string_buf_stub
                (src_pos$0,str,dst_pos$0,buf,len)}
    function blit_bytes_buf(src_pos,str,dst_pos,buf,len)
     {var
       src_pos$0=get_opt_pos(loc$1,cst_src_pos$1,src_pos),
       dst_pos$0=get_opt_pos(loc$1,cst_dst_pos$1,dst_pos);
      if(caml_call2(Base[278],len,0))
       return caml_call1(Base[300],cst_Bin_prot_Common_blit_bytes_buf_len_0);
      if(caml_call2(Base[281],len,0))
       {var _eQ_=caml_call1(Base_Bytes[37],str);
        if(caml_call2(Base[282],src_pos$0,_eQ_))
         caml_call1
          (Base[300],cst_Bin_prot_Common_blit_bytes_buf_src_pos_str_len);
        var _eR_=caml_ba_dim_1(buf),_eS_=caml_call2(Base[282],dst_pos$0,_eR_);
        return _eS_
                ?caml_call1
                  (Base[300],cst_Bin_prot_Common_blit_bytes_buf_src_pos_buf)
                :_eS_}
      var
       _eT_=caml_call1(Base_Bytes[37],str),
       _eU_=caml_call2(Base[259],src_pos$0,len);
      if(caml_call2(Base[282],_eU_,_eT_))
       return caml_call1
               (Base[300],
                cst_Bin_prot_Common_blit_bytes_buf_src_pos_len_str_len);
      var _eV_=caml_ba_dim_1(buf),_eW_=caml_call2(Base[259],dst_pos$0,len);
      return caml_call2(Base[282],_eW_,_eV_)
              ?caml_call1
                (Base[300],cst_Bin_prot_Common_blit_bytes_buf_src_pos_len_buf)
              :runtime.bin_prot_blit_bytes_buf_stub
                (src_pos$0,str,dst_pos$0,buf,len)}
    function blit_buf_bytes(src_pos,buf,dst_pos,str,len)
     {var
       src_pos$0=get_opt_pos(loc$2,cst_src_pos$2,src_pos),
       dst_pos$0=get_opt_pos(loc$2,cst_dst_pos$2,dst_pos);
      if(caml_call2(Base[278],len,0))
       return caml_call1(Base[300],cst_Bin_prot_Common_blit_buf_string_len_0);
      if(caml_call2(Base[281],len,0))
       {var _eJ_=caml_ba_dim_1(buf);
        if(caml_call2(Base[282],src_pos$0,_eJ_))
         caml_call1
          (Base[300],cst_Bin_prot_Common_blit_buf_string_src_pos_buf_len);
        var
         _eK_=caml_call1(Base_Bytes[37],str),
         _eL_=caml_call2(Base[282],dst_pos$0,_eK_);
        return _eL_
                ?caml_call1
                  (Base[300],
                   cst_Bin_prot_Common_blit_buf_string_src_pos_str_len)
                :_eL_}
      var _eM_=caml_ba_dim_1(buf),_eN_=caml_call2(Base[259],src_pos$0,len);
      if(caml_call2(Base[282],_eN_,_eM_))
       return caml_call1
               (Base[300],
                cst_Bin_prot_Common_blit_buf_string_src_pos_len_buf_len);
      var
       _eO_=caml_call1(Base_Bytes[37],str),
       _eP_=caml_call2(Base[259],dst_pos$0,len);
      return caml_call2(Base[282],_eP_,_eO_)
              ?caml_call1
                (Base[300],
                 cst_Bin_prot_Common_blit_buf_string_src_pos_len_str_len)
              :runtime.bin_prot_blit_buf_bytes_stub
                (src_pos$0,buf,dst_pos$0,str,len)}
    function copy_htbl_list(htbl,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var rest=param$0[2],match=param$0[1],v=match[2],k=match[1];
          caml_call3(Stdlib_hashtbl[5],htbl,k,v);
          var param$0=rest;
          continue}
        return htbl}}
    var
     Bin_prot_Common=
      [0,
       create_buf,
       buf_len,
       assert_pos,
       check_pos,
       check_next,
       safe_get_pos,
       blit_string_buf,
       blit_bytes_buf,
       blit_buf_bytes,
       blit_buf_bytes,
       blit_buf,
       Buffer_short,
       No_variant_match,
       [0,to_string],
       Read_error,
       Poly_rec_write,
       Empty_type,
       raise_read_error,
       raise_variant_wrong_type,
       raise_concurrent_modification,
       array_bound_error,
       copy_htbl_list];
    caml_register_global(245,Bin_prot_Common,"Bin_prot__Common");
    function of_int(n)
     {if(n < 0)caml_call1(Stdlib[3],cst_Bin_prot_Nat0_of_int_n_0);return n}
    var Bin_prot_Nat0=[0,of_int];
    caml_register_global(247,Bin_prot_Nat0,"Bin_prot__Nat0");
    var
     arch_sixtyfour=64 === Stdlib_sys[10]?1:0,
     _e_=Stdlib_sys[12],
     _f_=
      _e_
       ?caml_ba_uint8_set16
       :function(buf,pos,x)
         {return caml_ba_uint8_set16(buf,pos,caml_bswap16(x))},
     _g_=
      _e_
       ?caml_ba_uint8_set32
       :function(buf,pos,x)
         {return caml_ba_uint8_set32(buf,pos,caml_int32_bswap(x))},
     _h_=
      _e_
       ?caml_ba_uint8_set64
       :function(buf,pos,x)
         {return caml_ba_uint8_set64(buf,pos,caml_int64_bswap(x))},
     _i_=
      _e_
       ?function(buf,pos,x)
         {return caml_ba_uint8_set16(buf,pos,caml_bswap16(x))}
       :caml_ba_uint8_set16,
     _j_=
      _e_
       ?function(buf,pos,x)
         {return caml_ba_uint8_set32(buf,pos,caml_int32_bswap(x))}
       :caml_ba_uint8_set32,
     _k_=
      _e_
       ?function(buf,pos,x)
         {return caml_ba_uint8_set64(buf,pos,caml_int64_bswap(x))}
       :caml_ba_uint8_set64;
    function bin_write_unit(buf,pos,param)
     {assert_pos(pos);
      check_pos(buf,pos);
      caml_ba_set_1(buf,pos,0);
      return pos + 1 | 0}
    function bin_write_bool(buf,pos,b)
     {assert_pos(pos);
      check_pos(buf,pos);
      var _eI_=b?1:0;
      caml_ba_set_1(buf,pos,_eI_);
      return pos + 1 | 0}
    function all_bin_write_small_int(buf,pos,n)
     {check_pos(buf,pos);caml_ba_set_1(buf,pos,n);return pos + 1 | 0}
    function all_bin_write_int16(buf,pos,n)
     {var next=pos + 3 | 0;
      check_next(buf,next);
      caml_ba_set_1(buf,pos,254);
      _i_(buf,pos + 1 | 0,n);
      return next}
    function all_bin_write_int32(buf,pos,n)
     {var next=pos + 5 | 0;
      check_next(buf,next);
      caml_ba_set_1(buf,pos,253);
      _j_(buf,pos + 1 | 0,n);
      return next}
    function all_bin_write_int64(buf,pos,n)
     {var next=pos + 9 | 0;
      check_next(buf,next);
      caml_ba_set_1(buf,pos,252);
      _k_(buf,pos + 1 | 0,n);
      return next}
    function bin_write_char(buf,pos,c)
     {assert_pos(pos);
      check_pos(buf,pos);
      caml_ba_set_1(buf,pos,c);
      return pos + 1 | 0}
    function bin_write_int(buf,pos,n)
     {assert_pos(pos);
      if(0 <= n)
       {if(128 <= n)
         {if(32768 <= n)
           {if(arch_sixtyfour)
             if(-2147483648 <= n)
              return all_bin_write_int64(buf,pos,caml_int64_of_int32(n));
            return all_bin_write_int32(buf,pos,n)}
          return all_bin_write_int16(buf,pos,n)}
        return all_bin_write_small_int(buf,pos,n)}
      if(-128 <= n)
       {var next=pos + 2 | 0;
        check_next(buf,next);
        caml_ba_set_1(buf,pos,255);
        caml_ba_set_1(buf,pos + 1 | 0,n);
        return next}
      if(-32768 <= n)return all_bin_write_int16(buf,pos,n);
      if(arch_sixtyfour)
       if(n < -2147483648)
        return all_bin_write_int64(buf,pos,caml_int64_of_int32(n));
      return all_bin_write_int32(buf,pos,n)}
    function bin_write_nat0(buf,pos,n)
     {assert_pos(pos);
      if(128 <= n)
       {if(65536 <= n)
         {if(arch_sixtyfour)
           if(1 <= n)
            return all_bin_write_int64(buf,pos,caml_int64_of_int32(n));
          return all_bin_write_int32(buf,pos,n)}
        return all_bin_write_int16(buf,pos,n)}
      return all_bin_write_small_int(buf,pos,n)}
    function bin_write_string(buf,pos,str)
     {var
       len=caml_ml_string_length(str),
       new_pos=bin_write_nat0(buf,pos,len),
       next=new_pos + len | 0;
      check_next(buf,next);
      runtime.bin_prot_blit_string_buf_stub(0,str,new_pos,buf,len);
      return next}
    function bin_write_bytes(buf,pos,str)
     {var
       len=caml_ml_bytes_length(str),
       new_pos=bin_write_nat0(buf,pos,len),
       next=new_pos + len | 0;
      check_next(buf,next);
      runtime.bin_prot_blit_bytes_buf_stub(0,str,new_pos,buf,len);
      return next}
    function bin_write_float(buf,pos,x)
     {assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      _k_(buf,pos,runtime.caml_int64_bits_of_float(x));
      return next}
    var
     bin_write_int32=
      arch_sixtyfour
       ?function(buf,pos,n){return bin_write_int(buf,pos,n)}
       :function(buf,pos,n)
         {if(! caml_greaterequal(n,32768))
           if(! caml_lessthan(n,-32768))return bin_write_int(buf,pos,n);
          assert_pos(pos);
          return all_bin_write_int32(buf,pos,n)};
    function bin_write_int64(buf,pos,n)
     {if(! caml_greaterequal(n,_l_))
       if(! caml_lessthan(n,_m_))
        {if(arch_sixtyfour)
          return bin_write_int(buf,pos,caml_int64_to_int32(n));
         if(! caml_greaterequal(n,_n_))
          if(! caml_lessthan(n,_o_))
           return bin_write_int(buf,pos,caml_int64_to_int32(n));
         assert_pos(pos);
         return all_bin_write_int32(buf,pos,caml_int64_to_int32(n))}
      assert_pos(pos);
      return all_bin_write_int64(buf,pos,n)}
    function bin_write_nativeint(buf,pos,n)
     {if(arch_sixtyfour)
       {var
         switch$0=
          caml_greaterequal(n,-2147483648)?0:caml_lessthan(n,-2147483648)?0:1;
        if(! switch$0)
         {assert_pos(pos);
          return all_bin_write_int64(buf,pos,caml_int64_of_int32(n))}}
      var switch$1=arch_sixtyfour?0:caml_greaterequal(n,32768)?1:0;
      if(! switch$1)
       if(! caml_lessthan(n,-32768))return bin_write_int(buf,pos,n);
      assert_pos(pos);
      return all_bin_write_int32(buf,pos,n)}
    function bin_write_ref(bin_write_el,buf,pos,r)
     {return caml_call3(bin_write_el,buf,pos,r[1])}
    function bin_write_lazy(bin_write_el,buf,pos,lv)
     {var
       _eH_=caml_obj_tag(lv),
       v=250 === _eH_?lv[1]:246 === _eH_?caml_call1(CamlinternalLazy[2],lv):lv;
      return caml_call3(bin_write_el,buf,pos,v)}
    function bin_write_option(bin_write_el,buf,pos,param)
     {if(param)
       {var v=param[1],next=bin_write_bool(buf,pos,1);
        return caml_call3(bin_write_el,buf,next,v)}
      return bin_write_bool(buf,pos,0)}
    function bin_write_pair(bin_write_a,bin_write_b,buf,pos,param)
     {var b=param[2],a=param[1],next=caml_call3(bin_write_a,buf,pos,a);
      return caml_call3(bin_write_b,buf,next,b)}
    function bin_write_triple
     (bin_write_a,bin_write_b,bin_write_c,buf,pos,param)
     {var
       c=param[3],
       b=param[2],
       a=param[1],
       next1=caml_call3(bin_write_a,buf,pos,a),
       next2=caml_call3(bin_write_b,buf,next1,b);
      return caml_call3(bin_write_c,buf,next2,c)}
    function bin_write_list(bin_write_el,buf,pos,lst)
     {var
       len=caml_call1(Stdlib_list[1],lst),
       els_pos$1=bin_write_nat0(buf,pos,len),
       els_pos=els_pos$1,
       param=lst;
      for(;;)
       {if(param)
         {var
           t=param[2],
           h=param[1],
           els_pos$0=caml_call3(bin_write_el,buf,els_pos,h),
           els_pos=els_pos$0,
           param=t;
          continue}
        return els_pos}}
    function bin_write_float_array(buf,pos,a)
     {var
       len=a.length - 1,
       pos$0=bin_write_nat0(buf,pos,len),
       size=len * 8 | 0,
       next=pos$0 + size | 0;
      check_next(buf,next);
      runtime.bin_prot_blit_float_array_buf_stub(0,a,pos$0,buf,len);
      return next}
    function bin_write_array_loop(bin_write_el,buf,els_pos,n,ar)
     {var els_pos_ref=[0,els_pos],_eF_=n - 1 | 0,_eE_=0;
      if(! (_eF_ < 0))
       {var i=_eE_;
        for(;;)
         {els_pos_ref[1]
          =
          caml_call3(bin_write_el,buf,els_pos_ref[1],ar[i + 1]);
          var _eG_=i + 1 | 0;
          if(_eF_ !== i){var i=_eG_;continue}
          break}}
      return els_pos_ref[1]}
    function bin_write_array(bin_write_el,buf,pos,ar)
     {if(bin_write_el === bin_write_float)
       return bin_write_float_array(buf,pos,ar);
      var n=ar.length - 1,els_pos=bin_write_nat0(buf,pos,n);
      return bin_write_array_loop(bin_write_el,buf,els_pos,n,ar)}
    function bin_write_hashtbl(bin_write_key,bin_write_val,buf,pos,htbl)
     {var
       plen=caml_call1(Stdlib_hashtbl[15],htbl),
       els_pos=bin_write_nat0(buf,pos,plen),
       cnt_ref=[0,0];
      function coll_htbl(k,v,els_pos)
       {cnt_ref[1]++;
        var new_els_pos=caml_call3(bin_write_key,buf,els_pos,k);
        return caml_call3(bin_write_val,buf,new_els_pos,v)}
      var res_pos=caml_call3(Stdlib_hashtbl[14],coll_htbl,htbl,els_pos);
      if(cnt_ref[1] !== plen)
       raise_concurrent_modification(cst_bin_write_hashtbl);
      return res_pos}
    function bin_write_float32_vec(buf,pos,v)
     {var
       plen=caml_ba_dim_1(v),
       pos$0=bin_write_nat0(buf,pos,plen),
       size=plen * 4 | 0,
       next=pos$0 + size | 0;
      check_next(buf,next);
      runtime.bin_prot_blit_buf_stub(0,v,pos$0,buf,size);
      return next}
    function bin_write_float64_vec(buf,pos,v)
     {var
       plen=caml_ba_dim_1(v),
       pos$0=bin_write_nat0(buf,pos,plen),
       size=plen * 8 | 0,
       next=pos$0 + size | 0;
      check_next(buf,next);
      runtime.bin_prot_blit_buf_stub(0,v,pos$0,buf,size);
      return next}
    function bin_write_float32_mat(buf,pos,m)
     {var
       len1=caml_ba_dim_1(m),
       len2=caml_ba_dim_2(m),
       pos$0=bin_write_nat0(buf,pos,len1),
       pos$1=bin_write_nat0(buf,pos$0,len2),
       size=caml_mul(len1,len2) * 4 | 0,
       next=pos$1 + size | 0;
      check_next(buf,next);
      runtime.bin_prot_blit_buf_stub(0,m,pos$1,buf,size);
      return next}
    function bin_write_float64_mat(buf,pos,m)
     {var
       len1=caml_ba_dim_1(m),
       len2=caml_ba_dim_2(m),
       pos$0=bin_write_nat0(buf,pos,len1),
       pos$1=bin_write_nat0(buf,pos$0,len2),
       size=caml_mul(len1,len2) * 8 | 0,
       next=pos$1 + size | 0;
      check_next(buf,next);
      runtime.bin_prot_blit_buf_stub(0,m,pos$1,buf,size);
      return next}
    function bin_write_bigstring(buf,pos,s)
     {var
       len=caml_ba_dim_1(s),
       pos$0=bin_write_nat0(buf,pos,len),
       next=pos$0 + len | 0;
      check_next(buf,next);
      runtime.bin_prot_blit_buf_stub(0,s,pos$0,buf,len);
      return next}
    function bin_write_variant_int(buf,pos,x)
     {assert_pos(pos);
      var next=pos + 4 | 0;
      check_next(buf,next);
      _j_(buf,pos,x << 1 | 1);
      return next}
    function bin_write_int_8bit(buf,pos,n)
     {assert_pos(pos);
      check_pos(buf,pos);
      caml_ba_set_1(buf,pos,n);
      return pos + 1 | 0}
    function bin_write_int_16bit(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 2 | 0;
      check_next(buf,next);
      _i_(buf,pos,n);
      return next}
    function bin_write_int_32bit(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 4 | 0;
      check_next(buf,next);
      _j_(buf,pos,n);
      return next}
    function bin_write_size_header(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      _k_(buf,pos,caml_int64_of_int32(n));
      return next}
    function bin_write_int64_bits(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      _k_(buf,pos,n);
      return next}
    function bin_write_network16_int(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 2 | 0;
      check_next(buf,next);
      _f_(buf,pos,n);
      return next}
    function bin_write_network32_int(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 4 | 0;
      check_next(buf,next);
      _g_(buf,pos,n);
      return next}
    function bin_write_network32_int32(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 4 | 0;
      check_next(buf,next);
      _g_(buf,pos,n);
      return next}
    function bin_write_network64_int(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      _h_(buf,pos,caml_int64_of_int32(n));
      return next}
    function bin_write_network64_int64(buf,pos,n)
     {assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      _h_(buf,pos,n);
      return next}
    function bin_write_array_no_length(bin_write_el,buf,pos,ar)
     {return bin_write_array_loop(bin_write_el,buf,pos,ar.length - 1,ar)}
    function bin_write_t(buf,pos,x)
     {var x$0=caml_call1(include[3],x);
      if(16 === caml_ml_string_length(x$0))
       {assert_pos(pos);
        var next=pos + 16 | 0;
        check_next(buf,next);
        if(arch_sixtyfour)
         {var a=caml_string_get64(x$0,0),b=caml_string_get64(x$0,8);
          caml_ba_uint8_set64(buf,pos,a);
          caml_ba_uint8_set64(buf,pos + 8 | 0,b)}
        else
         {var
           a$0=caml_string_get32(x$0,0),
           b$0=caml_string_get32(x$0,4),
           c=caml_string_get32(x$0,8),
           d=caml_string_get32(x$0,12);
          caml_ba_uint8_set32(buf,pos,a$0);
          caml_ba_uint8_set32(buf,pos + 4 | 0,b$0);
          caml_ba_uint8_set32(buf,pos + 8 | 0,c);
          caml_ba_uint8_set32(buf,pos + 12 | 0,d)}
        return next}
      throw [0,Assert_failure,_p_]}
    var
     Bin_prot_Write=
      [0,
       bin_write_unit,
       bin_write_bool,
       bin_write_string,
       bin_write_bytes,
       bin_write_char,
       bin_write_int,
       bin_write_nat0,
       bin_write_float,
       bin_write_int32,
       bin_write_int64,
       bin_write_nativeint,
       bin_write_ref,
       bin_write_lazy,
       bin_write_option,
       bin_write_pair,
       bin_write_triple,
       bin_write_list,
       bin_write_array,
       bin_write_hashtbl,
       bin_write_float32_vec,
       bin_write_float64_vec,
       bin_write_float64_vec,
       bin_write_float32_mat,
       bin_write_float64_mat,
       bin_write_float64_mat,
       bin_write_bigstring,
       bin_write_float_array,
       bin_write_t,
       bin_write_variant_int,
       bin_write_int_8bit,
       bin_write_int_16bit,
       bin_write_int_32bit,
       bin_write_size_header,
       bin_write_int64_bits,
       bin_write_network16_int,
       bin_write_network32_int,
       bin_write_network32_int32,
       bin_write_network64_int,
       bin_write_network64_int64,
       bin_write_array_no_length];
    caml_register_global(252,Bin_prot_Write,"Bin_prot__Write");
    var
     arch_sixtyfour$0=64 === Stdlib_sys[10]?1:0,
     _q_=Stdlib_sys[12],
     _r_=arch_sixtyfour$0?Stdlib_int32[7]:Stdlib[8],
     _s_=arch_sixtyfour$0?Stdlib_int32[7]:Stdlib[9],
     max_int_int64=caml_int64_of_int32(Stdlib[8]),
     min_int_int64=caml_int64_of_int32(Stdlib[9]);
    function safe_int_of_int32(pos,x)
     {if(arch_sixtyfour$0)return x;
      if(caml_greaterequal(x,_s_))if(caml_lessequal(x,_r_))return x;
      return raise_read_error(2,pos)}
    function safe_int_of_int64(pos,x)
     {if(caml_greaterequal(x,min_int_int64))
       if(caml_lessequal(x,max_int_int64))return caml_int64_to_int32(x);
      return raise_read_error(2,pos)}
    var
     _t_=
      arch_sixtyfour$0
       ?function(pos,x){return caml_int64_to_int32(x)}
       :function(pos,x)
         {if(caml_greaterequal(x,caml_int64_of_int32(Stdlib_nativeint[9])))
           if(caml_lessequal(x,caml_int64_of_int32(Stdlib_nativeint[8])))
            return caml_int64_to_int32(x);
          return raise_read_error(2,pos)},
     _u_=
      _q_
       ?caml_ba_uint8_get16
       :function(buf,pos){return caml_bswap16(caml_ba_uint8_get16(buf,pos))},
     _v_=
      _q_
       ?caml_ba_uint8_get32
       :function(buf,pos)
         {return caml_int32_bswap(caml_ba_uint8_get32(buf,pos))},
     _w_=
      _q_
       ?caml_ba_uint8_get64
       :function(buf,pos)
         {return caml_int64_bswap(caml_ba_uint8_get64(buf,pos))},
     _x_=
      _q_
       ?function(buf,pos){return caml_bswap16(caml_ba_uint8_get16(buf,pos))}
       :caml_ba_uint8_get16,
     _y_=
      _q_
       ?function(buf,pos)
         {return caml_int32_bswap(caml_ba_uint8_get32(buf,pos))}
       :caml_ba_uint8_get32,
     _z_=
      _q_
       ?function(buf,pos)
         {return caml_int64_bswap(caml_ba_uint8_get64(buf,pos))}
       :caml_ba_uint8_get64;
    function bin_read_unit(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      return 0 === caml_ba_get_1(buf,pos)
              ?(pos_ref[1] = pos + 1 | 0,0)
              :raise_read_error(8,pos)}
    function bin_read_bool(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      var match=caml_ba_get_1(buf,pos);
      return 1 === match
              ?(pos_ref[1] = pos + 1 | 0,1)
              :0 === match
                ?(pos_ref[1] = pos + 1 | 0,0)
                :raise_read_error(9,pos)}
    function safe_bin_read_neg_int8(buf,pos_ref,pos)
     {var next=pos + 1 | 0;
      check_next(buf,next);
      var c=caml_ba_get_1(buf,pos),n=128 <= c?c - 256 | 0:c;
      if(0 <= n)raise_read_error(0,pos_ref[1]);
      pos_ref[1] = next;
      return n}
    function safe_bin_read_int16(buf,pos_ref,pos)
     {var next=pos + 2 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      var x=_x_(buf,pos);
      return 32767 < x?x - 65536 | 0:x}
    if(arch_sixtyfour$0)
     var
      mask_32bit=caml_int64_to_int32(_A_),
      _B_=
       function(buf,pos_ref,pos)
        {var next=pos + 4 | 0;
         check_next(buf,next);
         pos_ref[1] = next;
         var n=_y_(buf,pos);
         return 0 <= n?n:n & mask_32bit};
    else
     var
      _B_=
       function(buf,pos_ref,pos)
        {var next=pos + 4 | 0;
         check_next(buf,next);
         var n=_y_(buf,pos);
         if(caml_greaterequal(n,0))
          if(caml_lessequal(n,_r_)){pos_ref[1] = next;return n}
         return raise_read_error(4,pos_ref[1])};
    function bin_read_nat0(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      var ch=caml_ba_get_1(buf,pos);
      if(128 <= ch)
       {if(252 <= ch)
         {var switcher=ch - 252 | 0;
          switch(switcher)
           {case 0:
             if(arch_sixtyfour$0)
              {var pos$0=pos + 1 | 0,next$0=pos$0 + 8 | 0;
               check_next(buf,next$0);
               var n=_z_(buf,pos$0);
               if(caml_greaterequal(n,_C_))
                if(caml_lessequal(n,max_int_int64))
                 {var n$0=caml_int64_to_int32(n);
                  pos_ref[1] = next$0;
                  return n$0}
               return raise_read_error(4,pos_ref[1])}
             break;
            case 1:return _B_(buf,pos_ref,pos + 1 | 0);
            case 2:
             var pos$1=pos + 1 | 0,next=pos$1 + 2 | 0;
             check_next(buf,next);
             pos_ref[1] = next;
             return _x_(buf,pos$1)
            }}
        return raise_read_error(3,pos)}
      pos_ref[1] = pos + 1 | 0;
      return ch}
    function bin_read_bytes(buf,pos_ref)
     {var start_pos=pos_ref[1],len=bin_read_nat0(buf,pos_ref);
      if(Stdlib_sys[13] < len)raise_read_error(11,start_pos);
      var pos=pos_ref[1],next=pos + len | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      var str=caml_create_bytes(len);
      runtime.bin_prot_blit_buf_bytes_stub(pos,buf,0,str,len);
      return str}
    function bin_read_string(buf,pos_ref)
     {var str=bin_read_bytes(buf,pos_ref);
      return caml_call1(Stdlib_bytes[42],str)}
    function bin_read_char(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      pos_ref[1] = pos + 1 | 0;
      return caml_ba_get_1(buf,pos)}
    function bin_read_int(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      var ch=caml_ba_get_1(buf,pos);
      if(128 <= ch)
       {if(252 <= ch)
         {var switcher=ch - 252 | 0;
          switch(switcher)
           {case 0:
             if(arch_sixtyfour$0)
              {var pos$0=pos + 1 | 0,next$0=pos$0 + 8 | 0;
               check_next(buf,next$0);
               var n$1=_z_(buf,pos$0),n$2=safe_int_of_int64(pos_ref[1],n$1);
               pos_ref[1] = next$0;
               return n$2}
             break;
            case 1:
             var pos$1=pos + 1 | 0,next=pos$1 + 4 | 0;
             check_next(buf,next);
             var n=_y_(buf,pos$1),n$0=safe_int_of_int32(pos_ref[1],n);
             pos_ref[1] = next;
             return n$0;
            case 2:return safe_bin_read_int16(buf,pos_ref,pos + 1 | 0);
            default:return safe_bin_read_neg_int8(buf,pos_ref,pos + 1 | 0)}}
        return raise_read_error(1,pos)}
      pos_ref[1] = pos + 1 | 0;
      return ch}
    function bin_read_float(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      return runtime.caml_int64_float_of_bits(_z_(buf,pos))}
    function bin_read_int32(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      var ch=caml_ba_get_1(buf,pos);
      if(128 <= ch)
       {if(253 <= ch)
         {var switcher=ch - 253 | 0;
          switch(switcher)
           {case 0:
             var pos$0=pos + 1 | 0,next=pos$0 + 4 | 0;
             check_next(buf,next);
             pos_ref[1] = next;
             return _y_(buf,pos$0);
            case 1:return safe_bin_read_int16(buf,pos_ref,pos + 1 | 0);
            default:return safe_bin_read_neg_int8(buf,pos_ref,pos + 1 | 0)}}
        return raise_read_error(5,pos)}
      pos_ref[1] = pos + 1 | 0;
      return ch}
    function bin_read_int64(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      var ch=caml_ba_get_1(buf,pos);
      if(128 <= ch)
       {if(252 <= ch)
         {var switcher=ch - 252 | 0;
          switch(switcher)
           {case 0:
             var pos$0=pos + 1 | 0,next=pos$0 + 8 | 0;
             check_next(buf,next);
             pos_ref[1] = next;
             return _z_(buf,pos$0);
            case 1:
             var pos$1=pos + 1 | 0,next$0=pos$1 + 4 | 0;
             check_next(buf,next$0);
             pos_ref[1] = next$0;
             var n=_y_(buf,pos$1);
             return caml_int64_of_int32(n);
            case 2:
             return caml_int64_of_int32
                     (safe_bin_read_int16(buf,pos_ref,pos + 1 | 0));
            default:
             return caml_int64_of_int32
                     (safe_bin_read_neg_int8(buf,pos_ref,pos + 1 | 0))}}
        return raise_read_error(6,pos)}
      pos_ref[1] = pos + 1 | 0;
      return caml_int64_of_int32(ch)}
    function bin_read_nativeint(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      var ch=caml_ba_get_1(buf,pos);
      if(128 <= ch)
       {if(252 <= ch)
         {var switcher=ch - 252 | 0;
          switch(switcher)
           {case 0:
             if(arch_sixtyfour$0)
              {var pos$0=pos + 1 | 0,next$0=pos$0 + 8 | 0;
               check_next(buf,next$0);
               var n$0=_z_(buf,pos$0),n$1=_t_(pos$0,n$0);
               pos_ref[1] = next$0;
               return n$1}
             break;
            case 1:
             var pos$1=pos + 1 | 0,next=pos$1 + 4 | 0;
             check_next(buf,next);
             pos_ref[1] = next;
             var n=_y_(buf,pos$1);
             return n;
            case 2:return safe_bin_read_int16(buf,pos_ref,pos + 1 | 0);
            default:return safe_bin_read_neg_int8(buf,pos_ref,pos + 1 | 0)}}
        return raise_read_error(7,pos)}
      pos_ref[1] = pos + 1 | 0;
      return ch}
    function bin_read_ref(bin_read_el,buf,pos_ref)
     {var el=caml_call2(bin_read_el,buf,pos_ref);return [0,el]}
    function bin_read_lazy(bin_read_el,buf,pos_ref)
     {var el=caml_call2(bin_read_el,buf,pos_ref);
      return caml_call1(Stdlib_lazy[4],el)}
    function bin_read_option(bin_read_el,buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      var match=caml_ba_get_1(buf,pos);
      if(1 === match)
       {pos_ref[1] = pos + 1 | 0;
        var el=caml_call2(bin_read_el,buf,pos_ref);
        return [0,el]}
      return 0 === match?(pos_ref[1] = pos + 1 | 0,0):raise_read_error(10,pos)}
    function bin_read_pair(bin_read_a,bin_read_b,buf,pos_ref)
     {var
       a=caml_call2(bin_read_a,buf,pos_ref),
       b=caml_call2(bin_read_b,buf,pos_ref);
      return [0,a,b]}
    function bin_read_triple(bin_read_a,bin_read_b,bin_read_c,buf,pos_ref)
     {var
       a=caml_call2(bin_read_a,buf,pos_ref),
       b=caml_call2(bin_read_b,buf,pos_ref),
       c=caml_call2(bin_read_c,buf,pos_ref);
      return [0,a,b,c]}
    function bin_read_n_rev_list(bin_read_el,buf,pos_ref,n)
     {var n$0=n,acc=0;
      for(;;)
       {if(0 === n$0)return acc;
        var
         acc$0=[0,caml_call2(bin_read_el,buf,pos_ref),acc],
         n$1=n$0 - 1 | 0,
         n$0=n$1,
         acc=acc$0;
        continue}}
    function bin_read_list(bin_read_el,buf,pos_ref)
     {var
       len=bin_read_nat0(buf,pos_ref),
       rev_lst=bin_read_n_rev_list(bin_read_el,buf,pos_ref,len);
      return caml_call1(Stdlib_list[9],rev_lst)}
    var dummy_float_buf=create_buf(8);
    bin_write_float(dummy_float_buf,0,3.1);
    var
     max_float_array_length=
      arch_sixtyfour$0?Stdlib_sys[14]:Stdlib_sys[14] / 2 | 0;
    function bin_read_float_array(buf,pos_ref)
     {var pos=pos_ref[1],len=bin_read_nat0(buf,pos_ref);
      if(max_float_array_length < len)raise_read_error(13,pos);
      var size=len * 8 | 0,pos$0=pos_ref[1],next=pos$0 + size | 0;
      check_next(buf,next);
      var arr=runtime.caml_make_float_vect(len);
      runtime.bin_prot_blit_buf_float_array_stub(pos$0,buf,0,arr,len);
      pos_ref[1] = next;
      return arr}
    function bin_read_array(bin_read_el,buf,pos_ref)
     {if(bin_read_el === bin_read_float)
       return bin_read_float_array(buf,pos_ref);
      var start_pos=pos_ref[1],len=bin_read_nat0(buf,pos_ref);
      if(0 === len)return [0];
      if(arch_sixtyfour$0)
       {if(Stdlib_sys[14] < len)raise_read_error(13,start_pos)}
      else
       if((Stdlib_sys[14] / 2 | 0) < len)
        {try
          {var
            el$1=caml_call2(bin_read_el,dummy_float_buf,[0,0]),
            _eC_=[0,el$1],
            maybe_float=_eC_}
         catch(_eD_){var maybe_float=0}
         if(maybe_float)
          {var
            el$0=maybe_float[1],
            _eA_=caml_obj_tag(el$0) === Stdlib_obj[14]?1:0,
            _eB_=_eA_ || (Stdlib_sys[14] < len?1:0);
           if(_eB_)raise_read_error(13,start_pos)}
         else
          if(Stdlib_sys[14] < len)raise_read_error(13,start_pos)}
      var
       first=caml_call2(bin_read_el,buf,pos_ref),
       res=runtime.caml_make_vect(len,first),
       _ey_=len - 1 | 0,
       _ex_=1;
      if(! (_ey_ < 1))
       {var i=_ex_;
        for(;;)
         {var el=caml_call2(bin_read_el,buf,pos_ref);
          res[i + 1] = el;
          var _ez_=i + 1 | 0;
          if(_ey_ !== i){var i=_ez_;continue}
          break}}
      return res}
    function bin_read_hashtbl(bin_read_key,bin_read_val,buf,pos_ref)
     {var
       len=bin_read_nat0(buf,pos_ref),
       htbl=caml_call2(Stdlib_hashtbl[1],0,len);
      function read_kv_pair(_ev_,_ew_)
       {return bin_read_pair(bin_read_key,bin_read_val,_ev_,_ew_)}
      var els=bin_read_n_rev_list(read_kv_pair,buf,pos_ref,len);
      return copy_htbl_list(htbl,els)}
    function bin_read_float32_vec(buf,pos_ref)
     {var
       len=bin_read_nat0(buf,pos_ref),
       size=len * 4 | 0,
       pos=pos_ref[1],
       next=pos + size | 0;
      check_next(buf,next);
      var vec=caml_call3(Bigarray[28][1],Bigarray[1],Bigarray[16],len);
      runtime.bin_prot_blit_buf_stub(pos,buf,0,vec,size);
      pos_ref[1] = next;
      return vec}
    function bin_read_float64_vec(buf,pos_ref)
     {var
       len=bin_read_nat0(buf,pos_ref),
       size=len * 8 | 0,
       pos=pos_ref[1],
       next=pos + size | 0;
      check_next(buf,next);
      var vec=caml_call3(Bigarray[28][1],Bigarray[2],Bigarray[16],len);
      runtime.bin_prot_blit_buf_stub(pos,buf,0,vec,size);
      pos_ref[1] = next;
      return vec}
    function bin_read_float32_mat(buf,pos_ref)
     {var
       len1=bin_read_nat0(buf,pos_ref),
       len2=bin_read_nat0(buf,pos_ref),
       size=caml_mul(len1,len2) * 4 | 0,
       pos=pos_ref[1],
       next=pos + size | 0;
      check_next(buf,next);
      var mat=caml_call4(Bigarray[29][1],Bigarray[1],Bigarray[16],len1,len2);
      runtime.bin_prot_blit_buf_stub(pos,buf,0,mat,size);
      pos_ref[1] = next;
      return mat}
    function bin_read_float64_mat(buf,pos_ref)
     {var
       len1=bin_read_nat0(buf,pos_ref),
       len2=bin_read_nat0(buf,pos_ref),
       size=caml_mul(len1,len2) * 8 | 0,
       pos=pos_ref[1],
       next=pos + size | 0;
      check_next(buf,next);
      var mat=caml_call4(Bigarray[29][1],Bigarray[2],Bigarray[16],len1,len2);
      runtime.bin_prot_blit_buf_stub(pos,buf,0,mat,size);
      pos_ref[1] = next;
      return mat}
    function bin_read_bigstring(buf,pos_ref)
     {var len=bin_read_nat0(buf,pos_ref),pos=pos_ref[1],next=pos + len | 0;
      check_next(buf,next);
      var str=create_buf(len);
      runtime.bin_prot_blit_buf_stub(pos,buf,0,str,len);
      pos_ref[1] = next;
      return str}
    function bin_read_variant_int(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 4 | 0;
      check_next(buf,next);
      var n=_y_(buf,pos);
      if(runtime.caml_equal(n & 1,0))throw [0,Read_error,12,pos];
      pos_ref[1] = next;
      return n >> 1}
    function bin_read_int_8bit(buf,pos_ref)
     {var pos=safe_get_pos(buf,pos_ref);
      assert_pos(pos);
      pos_ref[1] = pos + 1 | 0;
      return caml_ba_get_1(buf,pos)}
    function bin_read_int_16bit(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 2 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      return _x_(buf,pos)}
    function bin_read_int_32bit(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 4 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      var n=_y_(buf,pos);
      return safe_int_of_int32(pos,n)}
    function bin_read_size_header(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      var n=_z_(buf,pos);
      return safe_int_of_int64(pos,n)}
    function bin_read_int64_bits(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      return _z_(buf,pos)}
    function bin_read_network16_int(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 2 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      return _u_(buf,pos)}
    function bin_read_network32_int(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 4 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      var n=_v_(buf,pos);
      return safe_int_of_int32(pos,n)}
    function bin_read_network32_int32(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 4 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      return _v_(buf,pos)}
    function bin_read_network64_int(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      var n=_w_(buf,pos);
      return safe_int_of_int64(pos,n)}
    function bin_read_network64_int64(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 8 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      return _w_(buf,pos)}
    function bin_read_t(buf,pos_ref)
     {var pos=pos_ref[1];
      assert_pos(pos);
      var next=pos + 16 | 0;
      check_next(buf,next);
      pos_ref[1] = next;
      var res=caml_create_bytes(16);
      if(arch_sixtyfour$0)
       {var
         a=caml_ba_uint8_get64(buf,pos),
         b=caml_ba_uint8_get64(buf,pos + 8 | 0);
        caml_bytes_set64(res,0,a);
        caml_bytes_set64(res,8,b)}
      else
       {var
         a$0=caml_ba_uint8_get32(buf,pos),
         b$0=caml_ba_uint8_get32(buf,pos + 4 | 0),
         c=caml_ba_uint8_get32(buf,pos + 8 | 0),
         d=caml_ba_uint8_get32(buf,pos + 12 | 0);
        caml_bytes_set32(res,0,a$0);
        caml_bytes_set32(res,4,b$0);
        caml_bytes_set32(res,8,c);
        caml_bytes_set32(res,12,d)}
      var _eu_=caml_call1(Stdlib_bytes[42],res);
      return caml_call1(include[5],_eu_)}
    var
     Bin_prot_Read=
      [0,
       bin_read_unit,
       bin_read_bool,
       bin_read_string,
       bin_read_bytes,
       bin_read_char,
       bin_read_int,
       bin_read_nat0,
       bin_read_float,
       bin_read_int32,
       bin_read_int64,
       bin_read_nativeint,
       bin_read_ref,
       bin_read_lazy,
       bin_read_option,
       bin_read_pair,
       bin_read_triple,
       bin_read_list,
       bin_read_array,
       bin_read_hashtbl,
       bin_read_float32_vec,
       bin_read_float64_vec,
       bin_read_float64_vec,
       bin_read_float32_mat,
       bin_read_float64_mat,
       bin_read_float64_mat,
       bin_read_bigstring,
       bin_read_float_array,
       bin_read_variant_int,
       bin_read_int_8bit,
       bin_read_int_16bit,
       bin_read_int_32bit,
       bin_read_size_header,
       bin_read_int64_bits,
       bin_read_network16_int,
       bin_read_network32_int,
       bin_read_network32_int32,
       bin_read_network64_int,
       bin_read_network64_int64,
       bin_read_t];
    caml_register_global(258,Bin_prot_Read,"Bin_prot__Read");
    var
     _J_=include$0[7],
     _S_=include$0[16],
     _D_=include$0[1],
     _E_=include$0[2],
     _F_=include$0[3],
     _G_=include$0[4],
     _H_=include$0[5],
     _I_=include$0[6],
     _K_=include$0[8],
     _L_=include$0[9],
     _M_=include$0[10],
     _N_=include$0[11],
     _O_=include$0[12],
     _P_=include$0[13],
     _Q_=include$0[14],
     _R_=include$0[15],
     _T_=include$0[17],
     _U_=include$0[18],
     _V_=include$0[19],
     _W_=include$0[20],
     _X_=include$0[21],
     _Y_=include$0[22],
     _Z_=include$0[23],
     bin_shape_unit=caml_call2(_S_,caml_call1(include$0[5][1],cst_unit),0),
     bin_shape_bool=caml_call2(_S_,caml_call1(include$0[5][1],cst_bool),0),
     bin_shape_string=caml_call2(_S_,caml_call1(include$0[5][1],cst_string),0),
     bin_shape_bytes=caml_call2(_S_,caml_call1(include$0[5][1],cst_bytes),0),
     bin_shape_char=caml_call2(_S_,caml_call1(include$0[5][1],cst_char),0),
     bin_shape_float=caml_call2(_S_,caml_call1(include$0[5][1],cst_float),0),
     bin_shape_int=caml_call2(_S_,caml_call1(include$0[5][1],cst_int),0),
     bin_shape_int32=caml_call2(_S_,caml_call1(include$0[5][1],cst_int32),0),
     bin_shape_int63=caml_call2(_S_,caml_call1(include$0[5][1],cst_int63),0),
     bin_shape_int64=caml_call2(_S_,caml_call1(include$0[5][1],cst_int64),0),
     bin_shape_nativeint=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_nativeint),0),
     bin_shape_nat0=caml_call2(_S_,caml_call1(include$0[5][1],cst_nat0),0),
     bin_shape_digest=caml_call2(_S_,caml_call1(include$0[5][1],cst_digest),0),
     bin_shape_float32_vec=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_float32_vec),0),
     bin_shape_float64_vec=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_float64_vec),0),
     bin_shape_vec=caml_call2(_S_,caml_call1(include$0[5][1],cst_vec),0),
     bin_shape_float32_mat=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_float32_mat),0),
     bin_shape_float64_mat=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_float64_mat),0),
     bin_shape_mat=caml_call2(_S_,caml_call1(include$0[5][1],cst_mat),0),
     bin_shape_bigstring=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_bigstring),0),
     bin_shape_variant_int=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_variant_int),0),
     bin_shape_int_8bit=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_int_8bit),0),
     bin_shape_int_16bit=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_int_16bit),0),
     bin_shape_int_32bit=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_int_32bit),0),
     bin_shape_int_64bit=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_int_64bit),0),
     bin_shape_int64_bits=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_int64_bits),0),
     bin_shape_network16_int=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_network16_int),0),
     bin_shape_network32_int=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_network32_int),0),
     bin_shape_network32_int32=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_network32_int32),0),
     bin_shape_network64_int=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_network64_int),0),
     bin_shape_network64_int64=
      caml_call2(_S_,caml_call1(include$0[5][1],cst_network64_int64),0);
    function bin_shape_ref(x)
     {return caml_call2(_S_,caml_call1(include$0[5][1],cst_ref),[0,x,0])}
    function bin_shape_option(x)
     {return caml_call2(_S_,caml_call1(include$0[5][1],cst_option),[0,x,0])}
    function bin_shape_list(x)
     {return caml_call2(_S_,caml_call1(include$0[5][1],cst_list),[0,x,0])}
    function bin_shape_array(x)
     {return caml_call2(_S_,caml_call1(include$0[5][1],cst_array),[0,x,0])}
    function bin_shape_hashtbl(x,y)
     {return caml_call2
              (_S_,caml_call1(include$0[5][1],cst_hashtbl),[0,x,[0,y,0]])}
    var bin_shape_float_array=bin_shape_array(bin_shape_float);
    function bin_shape_lazy(x){return x}
    function bin_shape_pair(x,y){return caml_call1(_J_,[0,x,[0,y,0]])}
    function bin_shape_triple(x,y,z)
     {return caml_call1(_J_,[0,x,[0,y,[0,z,0]]])}
    var
     Bin_prot_Shape=
      [0,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       _K_,
       _L_,
       _M_,
       _N_,
       _O_,
       _P_,
       _Q_,
       _R_,
       _S_,
       _T_,
       _U_,
       _V_,
       _W_,
       _X_,
       _Y_,
       _Z_,
       bin_shape_unit,
       bin_shape_bool,
       bin_shape_string,
       bin_shape_bytes,
       bin_shape_char,
       bin_shape_float,
       bin_shape_int,
       bin_shape_int32,
       bin_shape_int63,
       bin_shape_int64,
       bin_shape_nativeint,
       bin_shape_nat0,
       bin_shape_digest,
       bin_shape_float32_vec,
       bin_shape_float64_vec,
       bin_shape_vec,
       bin_shape_float32_mat,
       bin_shape_float64_mat,
       bin_shape_mat,
       bin_shape_bigstring,
       bin_shape_variant_int,
       bin_shape_int_8bit,
       bin_shape_int_16bit,
       bin_shape_int_32bit,
       bin_shape_int_64bit,
       bin_shape_int64_bits,
       bin_shape_network16_int,
       bin_shape_network32_int,
       bin_shape_network32_int32,
       bin_shape_network64_int,
       bin_shape_network64_int64,
       bin_shape_ref,
       bin_shape_option,
       bin_shape_list,
       bin_shape_array,
       bin_shape_hashtbl,
       bin_shape_float_array,
       bin_shape_lazy,
       bin_shape_pair,
       bin_shape_triple];
    caml_register_global(260,Bin_prot_Shape,"Bin_prot__Shape");
    var
     arch_sixtyfour$1=64 === Stdlib_sys[10]?1:0,
     bin_size_unit=1,
     bin_size_bool=1,
     bin_size_char=1,
     bin_size_md5=16,
     ___=arch_sixtyfour$1?9:5,
     _$_=arch_sixtyfour$1?9:5,
     bin_size_int=caml_call2(Stdlib[6],___,_$_),
     bin_size_int$0=caml_call2(Stdlib[5],1,2),
     bin_size_float=8,
     bin_size_int32=5,
     bin_size_int64=9,
     bin_size_variant_int=4,
     bin_size_int_8bit=1,
     bin_size_int_16bit=2,
     bin_size_int_32bit=4,
     bin_size_int_64bit=8,
     bin_size_int64_bits=8,
     bin_size_network16_int=2,
     bin_size_network32_int=4,
     bin_size_network32_int32=4,
     bin_size_network64_int=8,
     bin_size_network64_int64=8,
     bin_size_md5$0=16,
     bin_size_nat0=1,
     bin_size_ref=1,
     bin_size_lazy_t=1,
     bin_size_option=1,
     bin_size_pair=2,
     bin_size_triple=3,
     bin_size_mat=2;
    function bin_size_unit$0(param){return 1}
    function bin_size_bool$0(param){return 1}
    function bin_size_char$0(param){return 1}
    function bin_size_int$1(n)
     {if(0 <= n)
       {if(128 <= n)
         {if(32768 <= n)
           {if(arch_sixtyfour$1)if(-2147483648 <= n)return 9;return 5}
          return 3}
        return 1}
      if(-128 <= n)return 2;
      if(-32768 <= n)return 3;
      if(arch_sixtyfour$1)if(n < -2147483648)return 9;
      return 5}
    function bin_size_nat0$0(n)
     {if(128 <= n)
       {if(65536 <= n){if(arch_sixtyfour$1)if(1 <= n)return 9;return 5}
        return 3}
      return 1}
    function bin_size_string_or_bytes(len)
     {var size_len=bin_size_nat0$0(len);return size_len + len | 0}
    function bin_size_string(str)
     {return bin_size_string_or_bytes(caml_ml_string_length(str))}
    function bin_size_bytes(str)
     {return bin_size_string_or_bytes(caml_ml_bytes_length(str))}
    function bin_size_md5$1(param){return 16}
    function bin_size_float$0(f){return 8}
    var
     _aa_=
      arch_sixtyfour$1
       ?function(n){return bin_size_int$1(n)}
       :function(n)
         {if(! caml_greaterequal(n,32768))
           if(! caml_lessthan(n,-32768))return bin_size_int$1(n);
          return 5},
     _ad_=
      arch_sixtyfour$1
       ?function(n)
         {if(! caml_greaterequal(n,_ab_))
           if(! caml_lessthan(n,_ac_))
            return bin_size_int$1(caml_int64_to_int32(n));
          return 9}
       :function(n)
         {if(! caml_greaterequal(n,_aK_))
           if(! caml_lessthan(n,_aL_))return _aa_(caml_int64_to_int32(n));
          return 9},
     bin_size_nativeint=
      arch_sixtyfour$1
       ?function(n){return _ad_(caml_int64_of_int32(n))}
       :function(n){return _aa_(n)};
    function bin_size_ref$0(bin_size_el,r)
     {return caml_call1(bin_size_el,r[1])}
    function bin_size_lazy(bin_size_el,lv)
     {var
       _es_=caml_obj_tag(lv),
       _et_=
        250 === _es_?lv[1]:246 === _es_?caml_call1(CamlinternalLazy[2],lv):lv;
      return caml_call1(bin_size_el,_et_)}
    function bin_size_option$0(bin_size_el,param)
     {if(param){var v=param[1];return 1 + caml_call1(bin_size_el,v) | 0}
      return 1}
    function bin_size_pair$0(bin_size_a,bin_size_b,param)
     {var b=param[2],a=param[1],_er_=caml_call1(bin_size_b,b);
      return caml_call1(bin_size_a,a) + _er_ | 0}
    function bin_size_triple$0(bin_size_a,bin_size_b,bin_size_c,param)
     {var
       c=param[3],
       b=param[2],
       a=param[1],
       _ep_=caml_call1(bin_size_c,c),
       _eq_=caml_call1(bin_size_b,b);
      return (caml_call1(bin_size_a,a) + _eq_ | 0) + _ep_ | 0}
    function bin_size_list(bin_size_el,lst)
     {var
       len$1=caml_call1(Stdlib_list[1],lst),
       len$2=bin_size_nat0$0(len$1),
       len=len$2,
       param=lst;
      for(;;)
       {if(param)
         {var
           t=param[2],
           h=param[1],
           len$0=len + caml_call1(bin_size_el,h) | 0,
           len=len$0,
           param=t;
          continue}
        return len}}
    function bin_size_len(len){return bin_size_nat0$0(len)}
    function bin_size_float_array(ar)
     {var len=ar.length - 1;return bin_size_len(len) + (8 * len | 0) | 0}
    function bin_size_array_loop(bin_size_el,ar,total_len,n)
     {var total_len_ref=[0,total_len],_em_=n - 1 | 0,_el_=0;
      if(! (_em_ < 0))
       {var i=_el_;
        for(;;)
         {var el=ar[i + 1],_en_=caml_call1(bin_size_el,el);
          total_len_ref[1] = total_len_ref[1] + _en_ | 0;
          var _eo_=i + 1 | 0;
          if(_em_ !== i){var i=_eo_;continue}
          break}}
      return total_len_ref[1]}
    function bin_size_array(bin_size_el,ar)
     {if(bin_size_el === bin_size_float$0)return bin_size_float_array(ar);
      var n=ar.length - 1,total_len=bin_size_len(n);
      return bin_size_array_loop(bin_size_el,ar,total_len,n)}
    function bin_size_hashtbl(bin_size_key,bin_size_val,htbl)
     {var cnt_ref=[0,0];
      function coll_htbl(k,v,total_len)
       {cnt_ref[1]++;
        var _ek_=caml_call1(bin_size_val,v);
        return (total_len + caml_call1(bin_size_key,k) | 0) + _ek_ | 0}
      var
       len=caml_call1(Stdlib_hashtbl[15],htbl),
       _ej_=bin_size_len(len),
       total_len=caml_call3(Stdlib_hashtbl[14],coll_htbl,htbl,_ej_);
      if(cnt_ref[1] !== len)
       raise_concurrent_modification(cst_bin_size_hashtbl);
      return total_len}
    function bin_size_gen_vec(vec,multiplier)
     {var len=caml_ba_dim_1(vec);
      return bin_size_len(len) + caml_mul(multiplier,len) | 0}
    function bin_size_float32_vec(vec){return bin_size_gen_vec(vec,4)}
    function bin_size_vec(vec){return bin_size_gen_vec(vec,8)}
    function bin_size_gen_mat(mat,multiplier)
     {var
       dim1=caml_ba_dim_1(mat),
       dim2=caml_ba_dim_2(mat),
       size=caml_mul(dim1,dim2),
       _ei_=bin_size_len(dim2);
      return (bin_size_len(dim1) + _ei_ | 0) + caml_mul(multiplier,size) | 0}
    function bin_size_float32_mat(mat){return bin_size_gen_mat(mat,4)}
    function bin_size_mat$0(mat){return bin_size_gen_mat(mat,8)}
    function bin_size_bigstring(buf){return bin_size_gen_vec(buf,1)}
    function bin_size_variant_int$0(param){return 4}
    function bin_size_int_8bit$0(param){return 1}
    function bin_size_int_16bit$0(param){return 2}
    function bin_size_int_32bit$0(param){return 4}
    function bin_size_int_64bit$0(param){return 8}
    function bin_size_int64_bits$0(param){return 8}
    function bin_size_network16_int$0(param){return 2}
    function bin_size_network32_int$0(param){return 4}
    function bin_size_network32_int32$0(param){return 4}
    function bin_size_network64_int$0(param){return 8}
    function bin_size_network64_int64$0(param){return 8}
    function bin_size_array_no_length(bin_size_el,ar)
     {return bin_size_array_loop(bin_size_el,ar,0,ar.length - 1)}
    var
     Minimum=
      [0,
       bin_size_unit,
       bin_size_bool,
       bin_size_nat0,
       bin_size_nat0,
       bin_size_char,
       bin_size_md5$0,
       bin_size_int$0,
       bin_size_float,
       bin_size_int$0,
       bin_size_int$0,
       bin_size_int$0,
       bin_size_nat0,
       bin_size_ref,
       bin_size_lazy_t,
       bin_size_option,
       bin_size_pair,
       bin_size_triple,
       bin_size_nat0,
       bin_size_nat0,
       bin_size_nat0,
       bin_size_nat0,
       bin_size_nat0,
       bin_size_nat0,
       bin_size_mat,
       bin_size_mat,
       bin_size_mat,
       bin_size_nat0,
       bin_size_nat0,
       bin_size_variant_int,
       bin_size_int_8bit,
       bin_size_int_16bit,
       bin_size_int_32bit,
       bin_size_int_64bit,
       bin_size_int64_bits,
       bin_size_network16_int,
       bin_size_network32_int,
       bin_size_network32_int32,
       bin_size_network64_int,
       bin_size_network64_int64],
     Maximum=
      [0,
       bin_size_unit,
       bin_size_bool,
       bin_size_char,
       bin_size_md5,
       bin_size_int,
       bin_size_float,
       bin_size_int32,
       bin_size_int64,
       bin_size_int,
       ___,
       bin_size_variant_int,
       bin_size_int_8bit,
       bin_size_int_16bit,
       bin_size_int_32bit,
       bin_size_int_64bit,
       bin_size_int64_bits,
       bin_size_network16_int,
       bin_size_network32_int,
       bin_size_network32_int32,
       bin_size_network64_int,
       bin_size_network64_int64],
     include$1=
      [0,
       bin_size_unit$0,
       bin_size_bool$0,
       bin_size_string,
       bin_size_bytes,
       bin_size_char$0,
       bin_size_int$1,
       bin_size_float$0,
       _aa_,
       _ad_,
       bin_size_nativeint,
       bin_size_nat0$0,
       bin_size_ref$0,
       bin_size_lazy,
       bin_size_lazy,
       bin_size_option$0,
       bin_size_pair$0,
       bin_size_triple$0,
       bin_size_list,
       bin_size_array,
       bin_size_hashtbl,
       bin_size_float32_vec,
       bin_size_vec,
       bin_size_vec,
       bin_size_float32_mat,
       bin_size_mat$0,
       bin_size_mat$0,
       bin_size_bigstring,
       bin_size_float_array,
       bin_size_variant_int$0,
       bin_size_int_8bit$0,
       bin_size_int_16bit$0,
       bin_size_int_32bit$0,
       bin_size_int_64bit$0,
       bin_size_int64_bits$0,
       bin_size_network16_int$0,
       bin_size_network32_int$0,
       bin_size_network32_int32$0,
       bin_size_network64_int$0,
       bin_size_network64_int64$0,
       bin_size_array_no_length,
       bin_size_md5$1,
       Maximum,
       Minimum];
    caml_register_global(261,include$1,"Bin_prot__Size");
    var S1=[0],S2=[0],S3=[0];
    function variant_wrong_type(name,buf,pos_ref,x)
     {return raise_variant_wrong_type(name,pos_ref[1])}
    var
     bin_writer_unit=[0,bin_size_unit$0,bin_write_unit],
     bin_reader_unit=
      [0,
       bin_read_unit,
       function(_ef_,_eg_,_eh_)
        {return variant_wrong_type(cst_unit$0,_ef_,_eg_,_eh_)}],
     bin_unit=[0,bin_shape_unit,bin_writer_unit,bin_reader_unit],
     bin_writer_bool=[0,bin_size_bool$0,bin_write_bool],
     bin_reader_bool=
      [0,
       bin_read_bool,
       function(_ec_,_ed_,_ee_)
        {return variant_wrong_type(cst_bool$0,_ec_,_ed_,_ee_)}],
     bin_bool=[0,bin_shape_bool,bin_writer_bool,bin_reader_bool],
     bin_writer_string=[0,bin_size_string,bin_write_string],
     bin_reader_string=
      [0,
       bin_read_string,
       function(_d$_,_ea_,_eb_)
        {return variant_wrong_type(cst_string$0,_d$_,_ea_,_eb_)}],
     bin_string=[0,bin_shape_string,bin_writer_string,bin_reader_string],
     bin_writer_bytes=[0,bin_size_bytes,bin_write_bytes],
     bin_reader_bytes=
      [0,
       bin_read_bytes,
       function(_d8_,_d9_,_d__)
        {return variant_wrong_type(cst_bytes$0,_d8_,_d9_,_d__)}],
     bin_bytes=[0,bin_shape_bytes,bin_writer_bytes,bin_reader_bytes],
     bin_writer_char=[0,bin_size_char$0,bin_write_char],
     bin_reader_char=
      [0,
       bin_read_char,
       function(_d5_,_d6_,_d7_)
        {return variant_wrong_type(cst_char$0,_d5_,_d6_,_d7_)}],
     bin_char=[0,bin_shape_char,bin_writer_char,bin_reader_char],
     bin_writer_int=[0,bin_size_int$1,bin_write_int],
     bin_reader_int=
      [0,
       bin_read_int,
       function(_d2_,_d3_,_d4_)
        {return variant_wrong_type(cst_int$0,_d2_,_d3_,_d4_)}],
     bin_int=[0,bin_shape_int,bin_writer_int,bin_reader_int],
     bin_writer_float=[0,bin_size_float$0,bin_write_float],
     bin_reader_float=
      [0,
       bin_read_float,
       function(_dZ_,_d0_,_d1_)
        {return variant_wrong_type(cst_float$0,_dZ_,_d0_,_d1_)}],
     bin_float=[0,bin_shape_float,bin_writer_float,bin_reader_float],
     bin_writer_int32=[0,_aa_,bin_write_int32],
     bin_reader_int32=
      [0,
       bin_read_int32,
       function(_dW_,_dX_,_dY_)
        {return variant_wrong_type(cst_int32$0,_dW_,_dX_,_dY_)}],
     bin_int32=[0,bin_shape_int32,bin_writer_int32,bin_reader_int32],
     bin_writer_int64=[0,_ad_,bin_write_int64],
     bin_reader_int64=
      [0,
       bin_read_int64,
       function(_dT_,_dU_,_dV_)
        {return variant_wrong_type(cst_int64$0,_dT_,_dU_,_dV_)}],
     bin_int64=[0,bin_shape_int64,bin_writer_int64,bin_reader_int64],
     bin_writer_nativeint=[0,bin_size_nativeint,bin_write_nativeint],
     bin_reader_nativeint=
      [0,
       bin_read_nativeint,
       function(_dQ_,_dR_,_dS_)
        {return variant_wrong_type(cst_nativeint$0,_dQ_,_dR_,_dS_)}],
     bin_nativeint=
      [0,bin_shape_nativeint,bin_writer_nativeint,bin_reader_nativeint],
     bin_writer_nat0=[0,bin_size_nat0$0,bin_write_nat0],
     bin_reader_nat0=
      [0,
       bin_read_nat0,
       function(_dN_,_dO_,_dP_)
        {return variant_wrong_type(cst_nat0$0,_dN_,_dO_,_dP_)}],
     bin_nat0=[0,bin_shape_nat0,bin_writer_nat0,bin_reader_nat0];
    function bin_writer_ref(bin_writer_el)
     {function _dM_(buf,pos,v)
       {return bin_write_ref(bin_writer_el[2],buf,pos,v)}
      return [0,function(v){return bin_size_ref$0(bin_writer_el[1],v)},_dM_]}
    function bin_reader_ref(bin_reader_el)
     {function _dI_(_dJ_,_dK_,_dL_)
       {return variant_wrong_type(cst_ref$0,_dJ_,_dK_,_dL_)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_ref(bin_reader_el[1],buf,pos_ref)},
              _dI_]}
    function bin_shape_ref$0(x1){return bin_shape_ref(x1)}
    function bin_ref(bin_el)
     {var _dG_=bin_reader_ref(bin_el[3]),_dH_=bin_writer_ref(bin_el[2]);
      return [0,bin_shape_ref$0(bin_el[1]),_dH_,_dG_]}
    function bin_writer_lazy(bin_writer_el)
     {function _dF_(buf,pos,v)
       {return bin_write_lazy(bin_writer_el[2],buf,pos,v)}
      return [0,function(v){return bin_size_lazy(bin_writer_el[1],v)},_dF_]}
    function bin_reader_lazy(bin_reader_el)
     {function _dB_(_dC_,_dD_,_dE_)
       {return variant_wrong_type(cst_lazy,_dC_,_dD_,_dE_)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_lazy(bin_reader_el[1],buf,pos_ref)},
              _dB_]}
    function bin_shape_lazy$0(x1){return x1}
    function bin_lazy(bin_el)
     {var _dz_=bin_reader_lazy(bin_el[3]),_dA_=bin_writer_lazy(bin_el[2]);
      return [0,bin_el[1],_dA_,_dz_]}
    function bin_writer_option(bin_writer_el)
     {function _dy_(buf,pos,v)
       {return bin_write_option(bin_writer_el[2],buf,pos,v)}
      return [0,
              function(v){return bin_size_option$0(bin_writer_el[1],v)},
              _dy_]}
    function bin_reader_option(bin_reader_el)
     {function _du_(_dv_,_dw_,_dx_)
       {return variant_wrong_type(cst_option$0,_dv_,_dw_,_dx_)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_option(bin_reader_el[1],buf,pos_ref)},
              _du_]}
    function bin_shape_option$0(x1){return bin_shape_option(x1)}
    function bin_option(bin_el)
     {var _ds_=bin_reader_option(bin_el[3]),_dt_=bin_writer_option(bin_el[2]);
      return [0,bin_shape_option$0(bin_el[1]),_dt_,_ds_]}
    function bin_writer_pair(bin_writer_el1,bin_writer_el2)
     {function _dr_(buf,pos,v)
       {return bin_write_pair(bin_writer_el1[2],bin_writer_el2[2],buf,pos,v)}
      return [0,
              function(v)
               {return bin_size_pair$0(bin_writer_el1[1],bin_writer_el2[1],v)},
              _dr_]}
    function bin_reader_pair(bin_reader_el1,bin_reader_el2)
     {function _dn_(_do_,_dp_,_dq_)
       {return variant_wrong_type(cst_pair,_do_,_dp_,_dq_)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_pair
                        (bin_reader_el1[1],bin_reader_el2[1],buf,pos_ref)},
              _dn_]}
    function bin_pair(bin_el1,bin_el2)
     {var
       _dl_=bin_reader_pair(bin_el1[3],bin_el2[3]),
       _dm_=bin_writer_pair(bin_el1[2],bin_el2[2]);
      return [0,bin_shape_pair(bin_el1[1],bin_el2[1]),_dm_,_dl_]}
    function bin_writer_triple(bin_writer_el1,bin_writer_el2,bin_writer_el3)
     {function _dk_(buf,pos,v)
       {return bin_write_triple
                (bin_writer_el1[2],
                 bin_writer_el2[2],
                 bin_writer_el3[2],
                 buf,
                 pos,
                 v)}
      return [0,
              function(v)
               {return bin_size_triple$0
                        (bin_writer_el1[1],bin_writer_el2[1],bin_writer_el3[1],v)},
              _dk_]}
    function bin_reader_triple(bin_reader_el1,bin_reader_el2,bin_reader_el3)
     {function _dg_(_dh_,_di_,_dj_)
       {return variant_wrong_type(cst_triple,_dh_,_di_,_dj_)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_triple
                        (bin_reader_el1[1],
                         bin_reader_el2[1],
                         bin_reader_el3[1],
                         buf,
                         pos_ref)},
              _dg_]}
    function bin_triple(bin_el1,bin_el2,bin_el3)
     {var
       _de_=bin_reader_triple(bin_el1[3],bin_el2[3],bin_el3[3]),
       _df_=bin_writer_triple(bin_el1[2],bin_el2[2],bin_el3[2]);
      return [0,bin_shape_triple(bin_el1[1],bin_el2[1],bin_el3[1]),_df_,_de_]}
    function bin_writer_list(bin_writer_el)
     {function _dd_(buf,pos,v)
       {return bin_write_list(bin_writer_el[2],buf,pos,v)}
      return [0,function(v){return bin_size_list(bin_writer_el[1],v)},_dd_]}
    function bin_reader_list(bin_reader_el)
     {function _c$_(_da_,_db_,_dc_)
       {return variant_wrong_type(cst_list$0,_da_,_db_,_dc_)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_list(bin_reader_el[1],buf,pos_ref)},
              _c$_]}
    function bin_shape_list$0(x1){return bin_shape_list(x1)}
    function bin_list(bin_el)
     {var _c9_=bin_reader_list(bin_el[3]),_c__=bin_writer_list(bin_el[2]);
      return [0,bin_shape_list$0(bin_el[1]),_c__,_c9_]}
    function bin_writer_array(bin_writer_el)
     {function _c8_(buf,pos,v)
       {return bin_write_array(bin_writer_el[2],buf,pos,v)}
      return [0,function(v){return bin_size_array(bin_writer_el[1],v)},_c8_]}
    function bin_reader_array(bin_reader_el)
     {function _c4_(_c5_,_c6_,_c7_)
       {return variant_wrong_type(cst_array$0,_c5_,_c6_,_c7_)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_array(bin_reader_el[1],buf,pos_ref)},
              _c4_]}
    function bin_shape_array$0(x1){return bin_shape_array(x1)}
    function bin_array(bin_el)
     {var _c2_=bin_reader_array(bin_el[3]),_c3_=bin_writer_array(bin_el[2]);
      return [0,bin_shape_array$0(bin_el[1]),_c3_,_c2_]}
    function bin_writer_hashtbl(bin_writer_el1,bin_writer_el2)
     {function _c1_(buf,pos,v)
       {return bin_write_hashtbl
                (bin_writer_el1[2],bin_writer_el2[2],buf,pos,v)}
      return [0,
              function(v)
               {return bin_size_hashtbl(bin_writer_el1[1],bin_writer_el2[1],v)},
              _c1_]}
    function bin_reader_hashtbl(bin_reader_el1,bin_reader_el2)
     {function _cX_(_cY_,_cZ_,_c0_)
       {return variant_wrong_type(cst_hashtbl$0,_cY_,_cZ_,_c0_)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_hashtbl
                        (bin_reader_el1[1],bin_reader_el2[1],buf,pos_ref)},
              _cX_]}
    function bin_shape_hashtbl$0(x1,x2){return bin_shape_hashtbl(x1,x2)}
    function bin_hashtbl(bin_el1,bin_el2)
     {var
       _cV_=bin_reader_hashtbl(bin_el1[3],bin_el2[3]),
       _cW_=bin_writer_hashtbl(bin_el1[2],bin_el2[2]);
      return [0,bin_shape_hashtbl$0(bin_el1[1],bin_el2[1]),_cW_,_cV_]}
    var
     bin_writer_float32_vec=[0,bin_size_float32_vec,bin_write_float32_vec],
     bin_reader_float32_vec=
      [0,
       bin_read_float32_vec,
       function(_cS_,_cT_,_cU_)
        {return variant_wrong_type(cst_float32_vec$0,_cS_,_cT_,_cU_)}],
     bin_float32_vec=
      [0,bin_shape_float32_vec,bin_writer_float32_vec,bin_reader_float32_vec],
     bin_writer_float64_vec=[0,bin_size_vec,bin_write_float64_vec],
     bin_reader_float64_vec=
      [0,
       bin_read_float64_vec,
       function(_cP_,_cQ_,_cR_)
        {return variant_wrong_type(cst_float64_vec$0,_cP_,_cQ_,_cR_)}],
     bin_float64_vec=
      [0,bin_shape_float64_vec,bin_writer_float64_vec,bin_reader_float64_vec],
     bin_writer_vec=[0,bin_size_vec,bin_write_float64_vec],
     bin_reader_vec=
      [0,
       bin_read_float64_vec,
       function(_cM_,_cN_,_cO_)
        {return variant_wrong_type(cst_vec$0,_cM_,_cN_,_cO_)}],
     bin_vec=[0,bin_shape_vec,bin_writer_vec,bin_reader_vec],
     bin_writer_float32_mat=[0,bin_size_float32_mat,bin_write_float32_mat],
     bin_reader_float32_mat=
      [0,
       bin_read_float32_mat,
       function(_cJ_,_cK_,_cL_)
        {return variant_wrong_type(cst_float32_mat$0,_cJ_,_cK_,_cL_)}],
     bin_float32_mat=
      [0,bin_shape_float32_mat,bin_writer_float32_mat,bin_reader_float32_mat],
     bin_writer_float64_mat=[0,bin_size_mat$0,bin_write_float64_mat],
     bin_reader_float64_mat=
      [0,
       bin_read_float64_mat,
       function(_cG_,_cH_,_cI_)
        {return variant_wrong_type(cst_float64_mat$0,_cG_,_cH_,_cI_)}],
     bin_float64_mat=
      [0,bin_shape_float64_mat,bin_writer_float64_mat,bin_reader_float64_mat],
     bin_writer_mat=[0,bin_size_mat$0,bin_write_float64_mat],
     bin_reader_mat=
      [0,
       bin_read_float64_mat,
       function(_cD_,_cE_,_cF_)
        {return variant_wrong_type(cst_mat$0,_cD_,_cE_,_cF_)}],
     bin_mat=[0,bin_shape_mat,bin_writer_mat,bin_reader_mat],
     bin_writer_bigstring=[0,bin_size_bigstring,bin_write_bigstring],
     bin_reader_bigstring=
      [0,
       bin_read_bigstring,
       function(_cA_,_cB_,_cC_)
        {return variant_wrong_type(cst_bigstring$0,_cA_,_cB_,_cC_)}],
     bin_bigstring=
      [0,bin_shape_bigstring,bin_writer_bigstring,bin_reader_bigstring],
     bin_writer_float_array=[0,bin_size_float_array,bin_write_float_array],
     bin_reader_float_array=
      [0,
       bin_read_float_array,
       function(_cx_,_cy_,_cz_)
        {return variant_wrong_type(cst_float_array,_cx_,_cy_,_cz_)}],
     bin_float_array=
      [0,bin_shape_float_array,bin_writer_float_array,bin_reader_float_array],
     bin_writer_variant_int=[0,bin_size_variant_int$0,bin_write_variant_int],
     bin_reader_variant_int=
      [0,
       bin_read_variant_int,
       function(_cu_,_cv_,_cw_)
        {return variant_wrong_type(cst_variant_int$0,_cu_,_cv_,_cw_)}],
     bin_variant_int=
      [0,bin_shape_variant_int,bin_writer_variant_int,bin_reader_variant_int],
     bin_writer_int_8bit=[0,bin_size_int_8bit$0,bin_write_int_8bit],
     bin_reader_int_8bit=
      [0,
       bin_read_int_8bit,
       function(_cr_,_cs_,_ct_)
        {return variant_wrong_type(cst_int_8bit$0,_cr_,_cs_,_ct_)}],
     bin_int_8bit=
      [0,bin_shape_int_8bit,bin_writer_int_8bit,bin_reader_int_8bit],
     bin_writer_int_16bit=[0,bin_size_int_16bit$0,bin_write_int_16bit],
     bin_reader_int_16bit=
      [0,
       bin_read_int_16bit,
       function(_co_,_cp_,_cq_)
        {return variant_wrong_type(cst_int_16bit$0,_co_,_cp_,_cq_)}],
     bin_int_16bit=
      [0,bin_shape_int_16bit,bin_writer_int_16bit,bin_reader_int_16bit],
     bin_writer_int_32bit=[0,bin_size_int_32bit$0,bin_write_int_32bit],
     bin_reader_int_32bit=
      [0,
       bin_read_int_32bit,
       function(_cl_,_cm_,_cn_)
        {return variant_wrong_type(cst_int_32bit$0,_cl_,_cm_,_cn_)}],
     bin_int_32bit=
      [0,bin_shape_int_32bit,bin_writer_int_32bit,bin_reader_int_32bit],
     bin_writer_int_64bit=[0,bin_size_int_64bit$0,bin_write_size_header],
     bin_reader_int_64bit=
      [0,
       bin_read_size_header,
       function(_ci_,_cj_,_ck_)
        {return variant_wrong_type(cst_int_64bit$0,_ci_,_cj_,_ck_)}],
     bin_int_64bit=
      [0,bin_shape_int_64bit,bin_writer_int_64bit,bin_reader_int_64bit],
     bin_writer_int64_bits=[0,bin_size_int64_bits$0,bin_write_int64_bits],
     bin_reader_int64_bits=
      [0,
       bin_read_int64_bits,
       function(_cf_,_cg_,_ch_)
        {return variant_wrong_type(cst_int64_bits$0,_cf_,_cg_,_ch_)}],
     bin_int64_bits=
      [0,bin_shape_int64_bits,bin_writer_int64_bits,bin_reader_int64_bits],
     bin_writer_network16_int=
      [0,bin_size_network16_int$0,bin_write_network16_int],
     bin_reader_network16_int=
      [0,
       bin_read_network16_int,
       function(_cc_,_cd_,_ce_)
        {return variant_wrong_type(cst_network16_int$0,_cc_,_cd_,_ce_)}],
     bin_network16_int=
      [0,
       bin_shape_network16_int,
       bin_writer_network16_int,
       bin_reader_network16_int],
     bin_writer_network32_int=
      [0,bin_size_network32_int$0,bin_write_network32_int],
     bin_reader_network32_int=
      [0,
       bin_read_network32_int,
       function(_b$_,_ca_,_cb_)
        {return variant_wrong_type(cst_network32_int$0,_b$_,_ca_,_cb_)}],
     bin_network32_int=
      [0,
       bin_shape_network32_int,
       bin_writer_network32_int,
       bin_reader_network32_int],
     bin_writer_network32_int32=
      [0,bin_size_network32_int32$0,bin_write_network32_int32],
     bin_reader_network32_int32=
      [0,
       bin_read_network32_int32,
       function(_b8_,_b9_,_b__)
        {return variant_wrong_type(cst_network32_int32$0,_b8_,_b9_,_b__)}],
     bin_network32_int32=
      [0,
       bin_shape_network32_int32,
       bin_writer_network32_int32,
       bin_reader_network32_int32],
     bin_writer_network64_int=
      [0,bin_size_network64_int$0,bin_write_network64_int],
     bin_reader_network64_int=
      [0,
       bin_read_network64_int,
       function(_b5_,_b6_,_b7_)
        {return variant_wrong_type(cst_network64_int$0,_b5_,_b6_,_b7_)}],
     bin_network64_int=
      [0,
       bin_shape_network64_int,
       bin_writer_network64_int,
       bin_reader_network64_int],
     bin_writer_network64_int64=
      [0,bin_size_network64_int64$0,bin_write_network64_int64],
     bin_reader_network64_int64=
      [0,
       bin_read_network64_int64,
       function(_b2_,_b3_,_b4_)
        {return variant_wrong_type(cst_network64_int64$0,_b2_,_b3_,_b4_)}],
     bin_network64_int64=
      [0,
       bin_shape_network64_int64,
       bin_writer_network64_int64,
       bin_reader_network64_int64];
    function bin_writer_array_no_length(bin_writer_el)
     {function _b1_(buf,pos,v)
       {return bin_write_array_no_length(bin_writer_el[2],buf,pos,v)}
      return [0,
              function(v){return bin_size_array_no_length(bin_writer_el[1],v)},
              _b1_]}
    function cnv_writer(cnv,tp_class)
     {function _bY_(buf,pos,v)
       {var _b0_=caml_call1(cnv,v);
        return caml_call3(tp_class[2],buf,pos,_b0_)}
      return [0,
              function(v)
               {var _bZ_=caml_call1(cnv,v);
                return caml_call1(tp_class[1],_bZ_)},
              _bY_]}
    function cnv_reader(cnv,tp_class)
     {function _bX_(buf,pos_ref,vtag)
       {return caml_call1(cnv,caml_call3(tp_class[2],buf,pos_ref,vtag))}
      return [0,
              function(buf,pos_ref)
               {return caml_call1(cnv,caml_call2(tp_class[1],buf,pos_ref))},
              _bX_]}
    function cnv(for_shape,for_writer,for_reader,tp_class)
     {var
       _bV_=cnv_reader(for_reader,tp_class[3]),
       _bW_=cnv_writer(for_writer,tp_class[2]);
      return [0,caml_call1(for_shape,tp_class[1]),_bW_,_bV_]}
    var
     Bin_prot_Type_class=
      [0,
       S1,
       S2,
       S3,
       bin_writer_unit,
       bin_reader_unit,
       bin_shape_unit,
       bin_unit,
       bin_writer_bool,
       bin_reader_bool,
       bin_shape_bool,
       bin_bool,
       bin_writer_string,
       bin_reader_string,
       bin_shape_string,
       bin_string,
       bin_writer_bytes,
       bin_reader_bytes,
       bin_shape_bytes,
       bin_bytes,
       bin_writer_char,
       bin_reader_char,
       bin_shape_char,
       bin_char,
       bin_writer_int,
       bin_reader_int,
       bin_shape_int,
       bin_int,
       bin_writer_float,
       bin_reader_float,
       bin_shape_float,
       bin_float,
       bin_writer_int32,
       bin_reader_int32,
       bin_shape_int32,
       bin_int32,
       bin_writer_int64,
       bin_reader_int64,
       bin_shape_int64,
       bin_int64,
       bin_writer_nativeint,
       bin_reader_nativeint,
       bin_shape_nativeint,
       bin_nativeint,
       bin_writer_nat0,
       bin_reader_nat0,
       bin_shape_nat0,
       bin_nat0,
       bin_writer_ref,
       bin_reader_ref,
       bin_shape_ref$0,
       bin_ref,
       bin_writer_lazy,
       bin_reader_lazy,
       bin_shape_lazy$0,
       bin_lazy,
       bin_writer_option,
       bin_reader_option,
       bin_shape_option$0,
       bin_option,
       bin_writer_pair,
       bin_reader_pair,
       bin_pair,
       bin_writer_triple,
       bin_reader_triple,
       bin_triple,
       bin_writer_list,
       bin_reader_list,
       bin_shape_list$0,
       bin_list,
       bin_writer_array,
       bin_reader_array,
       bin_shape_array$0,
       bin_array,
       bin_writer_hashtbl,
       bin_reader_hashtbl,
       bin_shape_hashtbl$0,
       bin_hashtbl,
       bin_writer_float32_vec,
       bin_reader_float32_vec,
       bin_shape_float32_vec,
       bin_float32_vec,
       bin_writer_float64_vec,
       bin_reader_float64_vec,
       bin_shape_float64_vec,
       bin_float64_vec,
       bin_writer_vec,
       bin_reader_vec,
       bin_shape_vec,
       bin_vec,
       bin_writer_float32_mat,
       bin_reader_float32_mat,
       bin_shape_float32_mat,
       bin_float32_mat,
       bin_writer_float64_mat,
       bin_reader_float64_mat,
       bin_shape_float64_mat,
       bin_float64_mat,
       bin_writer_mat,
       bin_reader_mat,
       bin_shape_mat,
       bin_mat,
       bin_writer_bigstring,
       bin_reader_bigstring,
       bin_shape_bigstring,
       bin_bigstring,
       bin_writer_float_array,
       bin_reader_float_array,
       bin_shape_float_array,
       bin_float_array,
       bin_writer_variant_int,
       bin_reader_variant_int,
       bin_variant_int,
       bin_writer_int_8bit,
       bin_reader_int_8bit,
       bin_shape_int_8bit,
       bin_int_8bit,
       bin_writer_int_16bit,
       bin_reader_int_16bit,
       bin_shape_int_16bit,
       bin_int_16bit,
       bin_writer_int_32bit,
       bin_reader_int_32bit,
       bin_shape_int_32bit,
       bin_int_32bit,
       bin_writer_int_64bit,
       bin_reader_int_64bit,
       bin_shape_int_64bit,
       bin_int_64bit,
       bin_writer_int64_bits,
       bin_reader_int64_bits,
       bin_shape_int64_bits,
       bin_int64_bits,
       bin_writer_network16_int,
       bin_reader_network16_int,
       bin_shape_network16_int,
       bin_network16_int,
       bin_writer_network32_int,
       bin_reader_network32_int,
       bin_shape_network32_int,
       bin_network32_int,
       bin_writer_network32_int32,
       bin_reader_network32_int32,
       bin_shape_network32_int32,
       bin_network32_int32,
       bin_writer_network64_int,
       bin_reader_network64_int,
       bin_shape_network64_int,
       bin_network64_int,
       bin_writer_network64_int64,
       bin_reader_network64_int64,
       bin_shape_network64_int64,
       bin_network64_int64,
       bin_writer_array_no_length,
       cnv_writer,
       cnv_reader,
       cnv];
    caml_register_global(262,Bin_prot_Type_class,"Bin_prot__Type_class");
    var Minimal=[0],Bin_prot_Binable=[0,Minimal];
    caml_register_global(263,Bin_prot_Binable,"Bin_prot__Binable");
    var size_header_length=8;
    function bin_dump(opt,writer,v)
     {if(opt)var sth=opt[1],header=sth;else var header=0;
      var v_len=caml_call1(writer[1],v);
      if(header)
       var
        tot_len=v_len + 8 | 0,
        buf=create_buf(tot_len),
        pos=bin_write_size_header(buf,0,v_len),
        buf$0=buf,
        pos$0=pos,
        pos_len=pos + v_len | 0;
      else
       var buf$1=create_buf(v_len),buf$0=buf$1,pos$0=0,pos_len=v_len;
      var pos$1=caml_call3(writer[2],buf$0,pos$0,v);
      return pos$1 === pos_len
              ?buf$0
              :caml_call1
                (Stdlib[3],
                 cst_Bin_prot_Utils_bin_dump_size_changed_during_writing)}
    function bin_read_stream(max_size,read,reader)
     {var buf=create_buf(size_header_length);
      caml_call3(read,buf,0,size_header_length);
      var pos_ref=[0,0],len=bin_read_size_header(buf,pos_ref);
      if(max_size)
       {var max_size$0=max_size[1];
        if(max_size$0 < len)
         {var _bU_=caml_call3(Stdlib_printf[4],_ae_,len,max_size$0);
          return caml_call1(Stdlib[3],_bU_)}}
      var buf$0=8 < len?create_buf(len):buf;
      caml_call3(read,buf$0,0,len);
      pos_ref[1] = 0;
      var res=caml_call2(reader[1],buf$0,pos_ref);
      if(pos_ref[1] === len)return res;
      var msg=caml_call3(Stdlib_printf[4],_af_,len,pos_ref[1]);
      return caml_call1(Stdlib[3],msg)}
    function Of_minimal(S)
     {var
       bin_shape_t=S[1],
       bin_size_t=S[2],
       bin_write_t=S[3],
       bin_read_t=S[4],
       bin_read_t$0=S[5],
       bin_writer_t=[0,bin_size_t,bin_write_t],
       bin_reader_t=[0,bin_read_t,bin_read_t$0],
       bin_t=[0,bin_shape_t,bin_writer_t,bin_reader_t];
      return [0,
              bin_size_t,
              bin_write_t,
              bin_read_t,
              bin_read_t$0,
              bin_shape_t,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    function Make_binable(S)
     {var B=S[1],bin_shape_t=B[1];
      function bin_size_t(t)
       {var _bT_=caml_call1(S[2],t);return caml_call1(B[2],_bT_)}
      function bin_write_t(buf,pos,t)
       {var _bS_=caml_call1(S[2],t);return caml_call3(B[3],buf,pos,_bS_)}
      function bin_read_t(buf,pos_ref)
       {var _bR_=caml_call2(B[4],buf,pos_ref);return caml_call1(S[3],_bR_)}
      function bin_read_t$0(buf,pos_ref,n)
       {var _bQ_=caml_call3(B[5],buf,pos_ref,n);return caml_call1(S[3],_bQ_)}
      var
       include=
        Of_minimal
         ([0,bin_shape_t,bin_size_t,bin_write_t,bin_read_t,bin_read_t$0]),
       bin_size_t$0=include[1],
       bin_write_t$0=include[2],
       bin_read_t$1=include[3],
       bin_read_t$2=include[4],
       bin_shape_t$0=include[5],
       bin_writer_t=include[6],
       bin_reader_t=include[7],
       bin_t=include[8];
      return [0,
              bin_size_t$0,
              bin_write_t$0,
              bin_read_t$1,
              bin_read_t$2,
              bin_shape_t$0,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    function with_module_name(f,module_name,function_name)
     {if(module_name)
       {var module_name$0=module_name[1];
        return caml_call4(Stdlib_printf[9],f,_ag_,module_name$0,function_name)}
      return caml_call1(f,function_name)}
    function raise_concurrent_modification$0(_bO_,_bP_)
     {return with_module_name(raise_concurrent_modification,_bO_,_bP_)}
    var _ai_=caml_call2(Stdlib_printf[9],Stdlib[3],_ah_);
    function raise_read_too_much(_bM_,_bN_)
     {return with_module_name(_ai_,_bM_,_bN_)}
    var _ak_=caml_call2(Stdlib_printf[9],Stdlib[3],_aj_);
    function raise_read_not_enough(_bK_,_bL_)
     {return with_module_name(_ak_,_bK_,_bL_)}
    function Make_iterable_binable1(S)
     {function bin_shape_t(t)
       {var
         _bI_=[0,caml_call1(S[9],t),0],
         _bJ_=
          [0,
           caml_call2
            (_S_,
             caml_call1
              (include$0[5][1],cst_ac8a9ff4_4994_11e6_9a1b_9fb4e933bd9d),
             _bI_),
           0];
        return caml_call2(_S_,S[1],_bJ_)}
      function bin_size_t(bin_size_a,t)
       {var size_ref=[0,0],cnt_ref=[0,0];
        function _bF_(el)
         {var _bH_=caml_call2(S[6],bin_size_a,el);
          size_ref[1] = size_ref[1] + _bH_ | 0;
          cnt_ref[1]++;
          return 0}
        caml_call2(S[4],t,_bF_);
        var len=caml_call1(S[3],t);
        if(cnt_ref[1] === len)
         {var _bG_=size_ref[1];return bin_size_nat0$0(len) + _bG_ | 0}
        return raise_concurrent_modification$0(S[2],cst_bin_size_t$0)}
      function bin_write_t(bin_write_a,buf,pos,t)
       {var
         plen=caml_call1(S[3],t),
         pos_ref=[0,bin_write_nat0(buf,pos,plen)],
         cnt_ref=[0,0];
        function _bE_(el)
         {pos_ref[1] = caml_call4(S[7],bin_write_a,buf,pos_ref[1],el);
          cnt_ref[1]++;
          return 0}
        caml_call2(S[4],t,_bE_);
        return cnt_ref[1] === plen
                ?pos_ref[1]
                :raise_concurrent_modification$0(S[2],cst_bin_write_t$0)}
      function bin_read_t(bin_read_a,buf,pos_ref)
       {var len=bin_read_nat0(buf,pos_ref),idx=[0,0];
        function next(param)
         {if(len <= idx[1])raise_read_too_much(S[2],cst_bin_read_t$1);
          idx[1]++;
          return caml_call3(S[8],bin_read_a,buf,pos_ref)}
        var result=caml_call2(S[5],len,next);
        if(idx[1] < len)raise_read_not_enough(S[2],cst_bin_read_t$2);
        return result}
      function bin_read_t$0(bin_read_a,buf,pos_ref,n)
       {return raise_variant_wrong_type(cst_t$0,pos_ref[1])}
      function bin_writer_t(bin_writer)
       {function _bD_(buf,pos,v){return bin_write_t(bin_writer[2],buf,pos,v)}
        return [0,function(v){return bin_size_t(bin_writer[1],v)},_bD_]}
      function bin_reader_t(bin_reader)
       {function _bC_(buf,pos_ref,n)
         {return bin_read_t$0(bin_reader[1],buf,pos_ref,n)}
        return [0,
                function(buf,pos_ref)
                 {return bin_read_t(bin_reader[1],buf,pos_ref)},
                _bC_]}
      function bin_t(type_class)
       {var _bA_=bin_reader_t(type_class[3]),_bB_=bin_writer_t(type_class[2]);
        return [0,bin_shape_t(type_class[1]),_bB_,_bA_]}
      return [0,
              bin_shape_t,
              bin_size_t,
              bin_write_t,
              bin_read_t,
              bin_read_t$0,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    function Make_iterable_binable2(S)
     {function bin_shape_t(t1,t2)
       {var
         _by_=[0,caml_call2(S[9],t1,t2),0],
         _bz_=
          [0,
           caml_call2
            (_S_,
             caml_call1
              (include$0[5][1],cst_b4e54ad2_4994_11e6_b8df_87c2997f9f52),
             _by_),
           0];
        return caml_call2(_S_,S[1],_bz_)}
      function bin_size_t(bin_size_a,bin_size_b,t)
       {var size_ref=[0,0],cnt_ref=[0,0];
        function _bv_(el)
         {var _bx_=caml_call3(S[6],bin_size_a,bin_size_b,el);
          size_ref[1] = size_ref[1] + _bx_ | 0;
          cnt_ref[1]++;
          return 0}
        caml_call2(S[4],t,_bv_);
        var len=caml_call1(S[3],t);
        if(cnt_ref[1] === len)
         {var _bw_=size_ref[1];return bin_size_nat0$0(len) + _bw_ | 0}
        return raise_concurrent_modification$0(S[2],cst_bin_size_t$1)}
      function bin_write_t(bin_write_a,bin_write_b,buf,pos,t)
       {var
         plen=caml_call1(S[3],t),
         pos_ref=[0,bin_write_nat0(buf,pos,plen)],
         cnt_ref=[0,0];
        function _bu_(el)
         {pos_ref[1]
          =
          caml_call5(S[7],bin_write_a,bin_write_b,buf,pos_ref[1],el);
          cnt_ref[1]++;
          return 0}
        caml_call2(S[4],t,_bu_);
        return cnt_ref[1] === plen
                ?pos_ref[1]
                :raise_concurrent_modification$0(S[2],cst_bin_write_t$1)}
      function bin_read_t(bin_read_a,bin_read_b,buf,pos_ref)
       {var len=bin_read_nat0(buf,pos_ref),idx=[0,0];
        function next(param)
         {if(len <= idx[1])raise_read_too_much(S[2],cst_bin_read_t$3);
          idx[1]++;
          return caml_call4(S[8],bin_read_a,bin_read_b,buf,pos_ref)}
        var result=caml_call2(S[5],len,next);
        if(idx[1] < len)raise_read_not_enough(S[2],cst_bin_read_t$4);
        return result}
      function bin_read_t$0(bin_read_a,bin_read_b,buf,pos_ref,n)
       {return raise_variant_wrong_type(cst_t$1,pos_ref[1])}
      function bin_writer_t(bin_writer1,bin_writer2)
       {function _bt_(buf,pos,v)
         {return bin_write_t(bin_writer1[2],bin_writer2[2],buf,pos,v)}
        return [0,
                function(v)
                 {return bin_size_t(bin_writer1[1],bin_writer2[1],v)},
                _bt_]}
      function bin_reader_t(bin_reader1,bin_reader2)
       {function _bs_(buf,pos_ref,n)
         {return bin_read_t$0(bin_reader1[1],bin_reader2[1],buf,pos_ref,n)}
        return [0,
                function(buf,pos_ref)
                 {return bin_read_t(bin_reader1[1],bin_reader2[1],buf,pos_ref)},
                _bs_]}
      function bin_t(type_class1,type_class2)
       {var
         _bq_=bin_reader_t(type_class1[3],type_class2[3]),
         _br_=bin_writer_t(type_class1[2],type_class2[2]);
        return [0,bin_shape_t(type_class1[1],type_class2[1]),_br_,_bq_]}
      return [0,
              bin_shape_t,
              bin_size_t,
              bin_write_t,
              bin_read_t,
              bin_read_t$0,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    function Make_iterable_binable3(S)
     {function bin_shape_t(t1,t2,t3)
       {var
         _bo_=[0,caml_call3(S[9],t1,t2,t3),0],
         _bp_=
          [0,
           caml_call2
            (_S_,
             caml_call1
              (include$0[5][1],cst_f2112eda_e7d7_11e6_bb36_072e9ce159db),
             _bo_),
           0];
        return caml_call2(_S_,S[1],_bp_)}
      function bin_size_t(bin_size_a,bin_size_b,bin_size_c,t)
       {var size_ref=[0,0],cnt_ref=[0,0];
        function _bl_(el)
         {var _bn_=caml_call4(S[6],bin_size_a,bin_size_b,bin_size_c,el);
          size_ref[1] = size_ref[1] + _bn_ | 0;
          cnt_ref[1]++;
          return 0}
        caml_call2(S[4],t,_bl_);
        var len=caml_call1(S[3],t);
        if(cnt_ref[1] === len)
         {var _bm_=size_ref[1];return bin_size_nat0$0(len) + _bm_ | 0}
        return raise_concurrent_modification$0(S[2],cst_bin_size_t$2)}
      function bin_write_t(bin_write_a,bin_write_b,bin_write_c,buf,pos,t)
       {var
         plen=caml_call1(S[3],t),
         pos_ref=[0,bin_write_nat0(buf,pos,plen)],
         cnt_ref=[0,0];
        function _bk_(el)
         {pos_ref[1]
          =
          caml_call6
           (S[7],bin_write_a,bin_write_b,bin_write_c,buf,pos_ref[1],el);
          cnt_ref[1]++;
          return 0}
        caml_call2(S[4],t,_bk_);
        return cnt_ref[1] === plen
                ?pos_ref[1]
                :raise_concurrent_modification$0(S[2],cst_bin_write_t$2)}
      function bin_read_t(bin_read_a,bin_read_b,bin_read_c,buf,pos_ref)
       {var len=bin_read_nat0(buf,pos_ref),idx=[0,0];
        function next(param)
         {if(len <= idx[1])raise_read_too_much(S[2],cst_bin_read_t$5);
          idx[1]++;
          return caml_call5(S[8],bin_read_a,bin_read_b,bin_read_c,buf,pos_ref)}
        var result=caml_call2(S[5],len,next);
        if(idx[1] < len)raise_read_not_enough(S[2],cst_bin_read_t$6);
        return result}
      function bin_read_t$0(bin_read_a,bin_read_b,bin_read_c,buf,pos_ref,n)
       {return raise_variant_wrong_type(cst_t$2,pos_ref[1])}
      function bin_writer_t(bin_writer1,bin_writer2,bin_writer3)
       {function _bj_(buf,pos,v)
         {return bin_write_t
                  (bin_writer1[2],bin_writer2[2],bin_writer3[2],buf,pos,v)}
        return [0,
                function(v)
                 {return bin_size_t
                          (bin_writer1[1],bin_writer2[1],bin_writer3[1],v)},
                _bj_]}
      function bin_reader_t(bin_reader1,bin_reader2,bin_reader3)
       {function _bi_(buf,pos_ref,n)
         {return bin_read_t$0
                  (bin_reader1[1],bin_reader2[1],bin_reader3[1],buf,pos_ref,n)}
        return [0,
                function(buf,pos_ref)
                 {return bin_read_t
                          (bin_reader1[1],bin_reader2[1],bin_reader3[1],buf,pos_ref)},
                _bi_]}
      function bin_t(type_class1,type_class2,type_class3)
       {var
         _bg_=bin_reader_t(type_class1[3],type_class2[3],type_class3[3]),
         _bh_=bin_writer_t(type_class1[2],type_class2[2],type_class3[2]);
        return [0,
                bin_shape_t(type_class1[1],type_class2[1],type_class3[1]),
                _bh_,
                _bg_]}
      return [0,
              bin_shape_t,
              bin_size_t,
              bin_write_t,
              bin_read_t,
              bin_read_t$0,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    function _al_(S)
     {var
       _ba_=[0,S[9],0],
       _bb_=
        [0,
         caml_call2
          (_S_,
           caml_call1
            (include$0[5][1],cst_6592371a_4994_11e6_923a_7748e4182764),
           _ba_),
         0],
       bin_shape_t=caml_call2(_S_,S[1],_bb_);
      function bin_size_t(t)
       {var size_ref=[0,0],cnt_ref=[0,0];
        function _bd_(el)
         {var _bf_=caml_call1(S[6],el);
          size_ref[1] = size_ref[1] + _bf_ | 0;
          cnt_ref[1]++;
          return 0}
        caml_call2(S[4],t,_bd_);
        var len=caml_call1(S[3],t);
        if(cnt_ref[1] === len)
         {var _be_=size_ref[1];return bin_size_nat0$0(len) + _be_ | 0}
        return raise_concurrent_modification$0(S[2],cst_bin_size_t)}
      function bin_write_t(buf,pos,t)
       {var
         plen=caml_call1(S[3],t),
         pos_ref=[0,bin_write_nat0(buf,pos,plen)],
         cnt_ref=[0,0];
        function _bc_(el)
         {pos_ref[1] = caml_call3(S[7],buf,pos_ref[1],el);
          cnt_ref[1]++;
          return 0}
        caml_call2(S[4],t,_bc_);
        return cnt_ref[1] === plen
                ?pos_ref[1]
                :raise_concurrent_modification$0(S[2],cst_bin_write_t)}
      function bin_read_t(buf,pos_ref)
       {var len=bin_read_nat0(buf,pos_ref),idx=[0,0];
        function next(param)
         {if(len <= idx[1])raise_read_too_much(S[2],cst_bin_read_t);
          idx[1]++;
          return caml_call2(S[8],buf,pos_ref)}
        var result=caml_call2(S[5],len,next);
        if(idx[1] < len)raise_read_not_enough(S[2],cst_bin_read_t$0);
        return result}
      function bin_read_t$0(buf,pos_ref,n)
       {return raise_variant_wrong_type(cst_t,pos_ref[1])}
      var
       bin_writer_t=[0,bin_size_t,bin_write_t],
       bin_reader_t=[0,bin_read_t,bin_read_t$0],
       bin_t=[0,bin_shape_t,bin_writer_t,bin_reader_t];
      return [0,
              bin_size_t,
              bin_write_t,
              bin_read_t,
              bin_read_t$0,
              bin_shape_t,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    function _am_(S)
     {var B=S[1];
      function bin_shape_t(bin_shape_el1,bin_shape_el2,bin_shape_el3)
       {return caml_call3(B[1],bin_shape_el1,bin_shape_el2,bin_shape_el3)}
      function bin_size_t(bin_size_el1,bin_size_el2,bin_size_el3,t)
       {var _a$_=caml_call1(S[2],t);
        return caml_call4(B[2],bin_size_el1,bin_size_el2,bin_size_el3,_a$_)}
      function bin_write_t
       (bin_write_el1,bin_write_el2,bin_write_el3,buf,pos,t)
       {var _a__=caml_call1(S[2],t);
        return caml_call6
                (B[3],bin_write_el1,bin_write_el2,bin_write_el3,buf,pos,_a__)}
      function bin_read_t(bin_read_el1,bin_read_el2,bin_read_el3,buf,pos_ref)
       {var
         _a9_=
          caml_call5(B[4],bin_read_el1,bin_read_el2,bin_read_el3,buf,pos_ref);
        return caml_call1(S[3],_a9_)}
      function bin_read_t$0
       (bin_read_el1,bin_read_el2,bin_read_el3,buf,pos_ref,n)
       {var
         _a8_=
          caml_call6
           (B[5],bin_read_el1,bin_read_el2,bin_read_el3,buf,pos_ref,n);
        return caml_call1(S[3],_a8_)}
      function bin_writer_t(bin_writer1,bin_writer2,bin_writer3)
       {function _a7_(buf,pos,v)
         {return bin_write_t
                  (bin_writer1[2],bin_writer2[2],bin_writer3[2],buf,pos,v)}
        return [0,
                function(v)
                 {return bin_size_t
                          (bin_writer1[1],bin_writer2[1],bin_writer3[1],v)},
                _a7_]}
      function bin_reader_t(bin_reader1,bin_reader2,bin_reader3)
       {function _a6_(buf,pos_ref,n)
         {return raise_variant_wrong_type
                  (cst_Bin_prot_Utils_Make_binable3_bin_reader_t,pos_ref[1])}
        return [0,
                function(buf,pos_ref)
                 {return bin_read_t
                          (bin_reader1[1],bin_reader2[1],bin_reader3[1],buf,pos_ref)},
                _a6_]}
      function bin_t(type_class1,type_class2,type_class3)
       {var
         _a4_=bin_reader_t(type_class1[3],type_class2[3],type_class3[3]),
         _a5_=bin_writer_t(type_class1[2],type_class2[2],type_class3[2]);
        return [0,
                bin_shape_t(type_class1[1],type_class2[1],type_class3[1]),
                _a5_,
                _a4_]}
      return [0,
              bin_shape_t,
              bin_size_t,
              bin_write_t,
              bin_read_t,
              bin_read_t$0,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    function _an_(S)
     {var B=S[1];
      function bin_shape_t(bin_shape_el1,bin_shape_el2)
       {return caml_call2(B[1],bin_shape_el1,bin_shape_el2)}
      function bin_size_t(bin_size_el1,bin_size_el2,t)
       {var _a3_=caml_call1(S[2],t);
        return caml_call3(B[2],bin_size_el1,bin_size_el2,_a3_)}
      function bin_write_t(bin_write_el1,bin_write_el2,buf,pos,t)
       {var _a2_=caml_call1(S[2],t);
        return caml_call5(B[3],bin_write_el1,bin_write_el2,buf,pos,_a2_)}
      function bin_read_t(bin_read_el1,bin_read_el2,buf,pos_ref)
       {var _a1_=caml_call4(B[4],bin_read_el1,bin_read_el2,buf,pos_ref);
        return caml_call1(S[3],_a1_)}
      function bin_read_t$0(bin_read_el1,bin_read_el2,buf,pos_ref,n)
       {var _a0_=caml_call5(B[5],bin_read_el1,bin_read_el2,buf,pos_ref,n);
        return caml_call1(S[3],_a0_)}
      function bin_writer_t(bin_writer1,bin_writer2)
       {function _aZ_(buf,pos,v)
         {return bin_write_t(bin_writer1[2],bin_writer2[2],buf,pos,v)}
        return [0,
                function(v)
                 {return bin_size_t(bin_writer1[1],bin_writer2[1],v)},
                _aZ_]}
      function bin_reader_t(bin_reader1,bin_reader2)
       {function _aY_(buf,pos_ref,n)
         {return raise_variant_wrong_type
                  (cst_Bin_prot_Utils_Make_binable2_bin_reader_t,pos_ref[1])}
        return [0,
                function(buf,pos_ref)
                 {return bin_read_t(bin_reader1[1],bin_reader2[1],buf,pos_ref)},
                _aY_]}
      function bin_t(type_class1,type_class2)
       {var
         _aW_=bin_reader_t(type_class1[3],type_class2[3]),
         _aX_=bin_writer_t(type_class1[2],type_class2[2]);
        return [0,bin_shape_t(type_class1[1],type_class2[1]),_aX_,_aW_]}
      return [0,
              bin_shape_t,
              bin_size_t,
              bin_write_t,
              bin_read_t,
              bin_read_t$0,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    function _ao_(S)
     {var B=S[1];
      function bin_shape_t(bin_shape_el){return caml_call1(B[1],bin_shape_el)}
      function bin_size_t(bin_size_el,t)
       {var _aV_=caml_call1(S[2],t);return caml_call2(B[2],bin_size_el,_aV_)}
      function bin_write_t(bin_write_el,buf,pos,t)
       {var _aU_=caml_call1(S[2],t);
        return caml_call4(B[3],bin_write_el,buf,pos,_aU_)}
      function bin_read_t(bin_read_el,buf,pos_ref)
       {var _aT_=caml_call3(B[4],bin_read_el,buf,pos_ref);
        return caml_call1(S[3],_aT_)}
      function bin_read_t$0(bin_read_el,buf,pos_ref,n)
       {var _aS_=caml_call4(B[5],bin_read_el,buf,pos_ref,n);
        return caml_call1(S[3],_aS_)}
      function bin_writer_t(bin_writer)
       {function _aR_(buf,pos,v){return bin_write_t(bin_writer[2],buf,pos,v)}
        return [0,function(v){return bin_size_t(bin_writer[1],v)},_aR_]}
      function bin_reader_t(bin_reader)
       {function _aQ_(buf,pos_ref,n)
         {return raise_variant_wrong_type
                  (cst_Bin_prot_Utils_Make_binable1_bin_reader_t,pos_ref[1])}
        return [0,
                function(buf,pos_ref)
                 {return bin_read_t(bin_reader[1],buf,pos_ref)},
                _aQ_]}
      function bin_t(type_class)
       {var _aO_=bin_reader_t(type_class[3]),_aP_=bin_writer_t(type_class[2]);
        return [0,bin_shape_t(type_class[1]),_aP_,_aO_]}
      return [0,
              bin_shape_t,
              bin_size_t,
              bin_write_t,
              bin_read_t,
              bin_read_t$0,
              bin_writer_t,
              bin_reader_t,
              bin_t]}
    var
     Bin_prot_Utils=
      [0,
       size_header_length,
       bin_read_size_header,
       bin_write_size_header,
       bin_dump,
       bin_read_stream,
       Of_minimal,
       Make_binable,
       _ao_,
       _an_,
       _am_,
       _al_,
       Make_iterable_binable1,
       Make_iterable_binable2,
       Make_iterable_binable3];
    caml_register_global(265,Bin_prot_Utils,"Bin_prot__Utils");
    function bin_shape_t(t)
     {return caml_call2
              (_S_,
               caml_call1
                (include$0[5][1],cst_85a2557e_490a_11e6_98ac_4b8953d525fe),
               [0,t,0])}
    function bin_size_t(bin_size_a,a){return 8 + caml_call1(bin_size_a,a) | 0}
    function bin_write_t$0(bin_write_a,buf,pos,a)
     {var
       start_a=pos + 8 | 0,
       end_a=caml_call3(bin_write_a,buf,start_a,a),
       size=end_a - start_a | 0,
       written=bin_write_size_header(buf,pos,size);
      if(written === start_a)return end_a;
      throw [0,Assert_failure,_ap_]}
    function bin_read_t$0(bin_read_a,buf,pos_ref)
     {var
       expected_size=bin_read_size_header(buf,pos_ref),
       start_a=pos_ref[1],
       a=caml_call2(bin_read_a,buf,pos_ref),
       end_a=pos_ref[1];
      if((end_a - start_a | 0) !== expected_size)
       {var
         _aN_=
          caml_call3(Stdlib_printf[4],_aq_,end_a - start_a | 0,expected_size);
        caml_call1(Stdlib[3],_aN_)}
      return a}
    function bin_read_t$1(param,_aM_,pos_ref)
     {return raise_variant_wrong_type(cst_Bin_prot_Blob_t,pos_ref[1])}
    var T=[0,bin_shape_t,bin_size_t,bin_write_t$0,bin_read_t$0,bin_read_t$1];
    function of_binable(t){return t}
    function to_binable(t){return t}
    var
     include$2=_ao_([0,T,to_binable,of_binable]),
     _ar_=include$2[1],
     _as_=include$2[2],
     _at_=include$2[3],
     _au_=include$2[4],
     _av_=include$2[5],
     _aw_=include$2[6],
     _ax_=include$2[7],
     _ay_=include$2[8],
     bin_shape_t$0=
      caml_call2
       (_S_,
        caml_call1(include$0[5][1],cst_85a1f76e_490a_11e6_86a9_5bef585f2602),
        0);
    function bin_size_t$0(t){return 8 + caml_ba_dim_1(t) | 0}
    function bin_write_t$1(buf,pos,t)
     {var size=caml_ba_dim_1(t),pos$0=bin_write_size_header(buf,pos,size);
      blit_buf(_az_,t,[0,pos$0],buf,size);
      return pos$0 + size | 0}
    function bin_read_t$2(buf,pos_ref)
     {var size=bin_read_size_header(buf,pos_ref),t=create_buf(size);
      blit_buf([0,pos_ref[1]],buf,_aA_,t,size);
      pos_ref[1] = pos_ref[1] + size | 0;
      return t}
    function bin_read_t$3(param,pos_ref)
     {return raise_variant_wrong_type(cst_Bin_prot_Blob_Opaque_t,pos_ref[1])}
    var
     T$0=
      [0,bin_shape_t$0,bin_size_t$0,bin_write_t$1,bin_read_t$2,bin_read_t$3],
     include$3=Of_minimal(T$0),
     bin_size_t$1=include$3[1],
     bin_write_t$2=include$3[2],
     bin_read_t$4=include$3[3],
     bin_read_t$5=include$3[4],
     bin_shape_t$1=include$3[5],
     bin_writer_t=include$3[6],
     bin_reader_t=include$3[7],
     bin_t=include$3[8];
    function to_opaque(blob,bin_writer){return bin_dump(0,bin_writer,blob)}
    function of_opaque_exn(t,bin_reader)
     {return caml_call2(bin_reader[1],t,[0,0])}
    function bin_size_t$2(t){return 8 + caml_ml_string_length(t) | 0}
    function bin_write_t$3(buf,pos,t)
     {var
       size=caml_ml_string_length(t),
       pos$0=bin_write_size_header(buf,pos,size);
      blit_string_buf(_aB_,t,[0,pos$0],buf,size);
      return pos$0 + size | 0}
    function string_of_bigstring(buf,pos,len)
     {var str=caml_create_bytes(len);
      blit_buf_bytes([0,pos],buf,_aC_,str,len);
      return caml_call1(Stdlib_bytes[42],str)}
    function bin_read_t$6(buf,pos_ref)
     {var
       len=bin_read_size_header(buf,pos_ref),
       t=string_of_bigstring(buf,pos_ref[1],len);
      pos_ref[1] = pos_ref[1] + len | 0;
      return t}
    function bin_read_t$7(param,pos_ref)
     {return raise_variant_wrong_type(cst_Bin_prot_Blob_Opaque_t$0,pos_ref[1])}
    var
     include$4=
      Of_minimal
       ([0,bin_shape_t$0,bin_size_t$2,bin_write_t$3,bin_read_t$6,bin_read_t$7]),
     bin_size_t$3=include$4[1],
     bin_write_t$4=include$4[2],
     bin_read_t$8=include$4[3],
     bin_read_t$9=include$4[4],
     bin_shape_t$2=include$4[5],
     bin_writer_t$0=include$4[6],
     bin_reader_t$0=include$4[7],
     bin_t$0=include$4[8],
     length=caml_ml_string_length;
    function to_opaque$0(buf,v,bin_writer_v)
     {var len=caml_call3(bin_writer_v[2],buf,0,v);
      return string_of_bigstring(buf,0,len)}
    function of_opaque_exn$0(buf,t,bin_reader_v)
     {var len=caml_ml_string_length(t);
      blit_string_buf(0,t,0,buf,len);
      var pos_ref=[0,0],res=caml_call2(bin_reader_v[1],buf,pos_ref);
      if(pos_ref[1] !== len)
       {var error=caml_call3(Stdlib_printf[4],_aD_,len,pos_ref[1]);
        return caml_call1(Stdlib[3],error)}
      return res}
    function bin_size_t$4(size){return 8 + size | 0}
    function bin_read_t$10(buf,pos_ref)
     {var size=bin_read_size_header(buf,pos_ref);
      pos_ref[1] = pos_ref[1] + size | 0;
      return size}
    function bin_read_t$11(param,pos_ref)
     {return raise_variant_wrong_type(cst_Bin_prot_Blob_Ignored_t,pos_ref[1])}
    var
     bin_reader_t$1=[0,bin_read_t$10,bin_read_t$11],
     Ignored=[0,bin_size_t$4,bin_read_t$10,bin_read_t$11,bin_reader_t$1],
     Bin_prot_Blob=
      [0,
       _ar_,
       _as_,
       _at_,
       _au_,
       _av_,
       _aw_,
       _ax_,
       _ay_,
       [0,
        [0,
         bin_size_t$1,
         bin_write_t$2,
         bin_read_t$4,
         bin_read_t$5,
         bin_shape_t$1,
         bin_writer_t,
         bin_reader_t,
         bin_t,
         to_opaque,
         of_opaque_exn],
        [0,
         bin_size_t$3,
         bin_write_t$4,
         bin_read_t$8,
         bin_read_t$9,
         bin_shape_t$2,
         bin_writer_t$0,
         bin_reader_t$0,
         bin_t$0,
         length,
         to_opaque$0,
         of_opaque_exn$0]],
       Ignored];
    caml_register_global(266,Bin_prot_Blob,"Bin_prot__Blob");
    var
     _aE_=include[1],
     _aF_=include[3],
     _aG_=include[4],
     _aH_=include[5],
     _aI_=include[6],
     _aJ_=include[7],
     bin_shape_t$3=
      caml_call2
       (_S_,
        caml_call1(include$0[5][1],cst_f6bdcdd0_9f75_11e6_9a7e_d3020428efed),
        0);
    function bin_read_t$12(buf,pos_ref,vdigest)
     {return raise_variant_wrong_type(cst_Shape_Md5_t,pos_ref[1])}
    var
     Bin_prot_Md5=
      [0,
       bin_shape_t$3,
       bin_size_md5$1,
       bin_write_t,
       bin_read_t,
       bin_read_t$12,
       _aI_,
       _aJ_,
       _aE_,
       _aF_,
       _aG_,
       _aH_];
    caml_register_global(267,Bin_prot_Md5,"Bin_prot__Md5");
    function bin_read_unit$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_unit$1,pos_ref[1])}
    function bin_read_bool$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_bool$1,pos_ref[1])}
    function bin_read_string$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_string$1,pos_ref[1])}
    function bin_read_bytes$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_bytes$1,pos_ref[1])}
    function bin_read_char$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_char$1,pos_ref[1])}
    function bin_read_int$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_int$1,pos_ref[1])}
    function bin_read_float$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_float$1,pos_ref[1])}
    function bin_read_float_array$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_float_array$0,pos_ref[1])}
    function bin_read_int32$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_int32$1,pos_ref[1])}
    function bin_read_int64$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_int64$1,pos_ref[1])}
    function bin_read_nativeint$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_nativeint$1,pos_ref[1])}
    function bin_read_ref$0(f,buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_ref$1,pos_ref[1])}
    function bin_read_lazy_t(f,buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_lazy$0,pos_ref[1])}
    function bin_read_lazy$0(f,buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_lazy$1,pos_ref[1])}
    function bin_read_option$0(f,buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_option$1,pos_ref[1])}
    function bin_read_list$0(f,buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_list$1,pos_ref[1])}
    function bin_read_array$0(f,buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_array$1,pos_ref[1])}
    function bin_read_hashtbl$0(f,g,buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_hashtbl$1,pos_ref[1])}
    function bin_read_bigstring$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_bigstring$1,pos_ref[1])}
    function bin_read_mat(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_mat$1,pos_ref[1])}
    function bin_read_float32_mat$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_float32_mat$1,pos_ref[1])}
    function bin_read_float64_mat$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_float64_mat$1,pos_ref[1])}
    function bin_read_vec(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_vec$1,pos_ref[1])}
    function bin_read_float32_vec$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_float32_vec$1,pos_ref[1])}
    function bin_read_float64_vec$0(buf,pos_ref,vint)
     {return raise_variant_wrong_type(cst_float64_vec$1,pos_ref[1])}
    var
     Bin_prot_Std=
      [0,
       bin_size_unit$0,
       bin_size_bool$0,
       bin_size_string,
       bin_size_bytes,
       bin_size_char$0,
       bin_size_int$1,
       bin_size_float$0,
       _aa_,
       _ad_,
       bin_size_nativeint,
       bin_size_nat0$0,
       bin_size_ref$0,
       bin_size_lazy,
       bin_size_lazy,
       bin_size_option$0,
       bin_size_pair$0,
       bin_size_triple$0,
       bin_size_list,
       bin_size_array,
       bin_size_hashtbl,
       bin_size_float32_vec,
       bin_size_vec,
       bin_size_vec,
       bin_size_float32_mat,
       bin_size_mat$0,
       bin_size_mat$0,
       bin_size_bigstring,
       bin_size_float_array,
       bin_size_variant_int$0,
       bin_size_int_8bit$0,
       bin_size_int_16bit$0,
       bin_size_int_32bit$0,
       bin_size_int_64bit$0,
       bin_size_int64_bits$0,
       bin_size_network16_int$0,
       bin_size_network32_int$0,
       bin_size_network32_int32$0,
       bin_size_network64_int$0,
       bin_size_network64_int64$0,
       bin_size_array_no_length,
       bin_size_md5$1,
       Maximum,
       Minimum,
       bin_unit,
       bin_shape_unit,
       bin_writer_unit,
       bin_write_unit,
       bin_reader_unit,
       bin_read_unit,
       bin_read_unit$0,
       bin_bool,
       bin_shape_bool,
       bin_writer_bool,
       bin_write_bool,
       bin_reader_bool,
       bin_read_bool,
       bin_read_bool$0,
       bin_string,
       bin_shape_string,
       bin_writer_string,
       bin_write_string,
       bin_reader_string,
       bin_read_string,
       bin_read_string$0,
       bin_bytes,
       bin_shape_bytes,
       bin_writer_bytes,
       bin_write_bytes,
       bin_reader_bytes,
       bin_read_bytes,
       bin_read_bytes$0,
       bin_char,
       bin_shape_char,
       bin_writer_char,
       bin_write_char,
       bin_reader_char,
       bin_read_char,
       bin_read_char$0,
       bin_int,
       bin_shape_int,
       bin_writer_int,
       bin_write_int,
       bin_reader_int,
       bin_read_int,
       bin_read_int$0,
       bin_float,
       bin_shape_float,
       bin_writer_float,
       bin_write_float,
       bin_reader_float,
       bin_read_float,
       bin_read_float$0,
       bin_float_array,
       bin_shape_float_array,
       bin_writer_float_array,
       bin_write_float_array,
       bin_reader_float_array,
       bin_read_float_array,
       bin_read_float_array$0,
       bin_int32,
       bin_shape_int32,
       bin_writer_int32,
       bin_write_int32,
       bin_reader_int32,
       bin_read_int32,
       bin_read_int32$0,
       bin_int64,
       bin_shape_int64,
       bin_writer_int64,
       bin_write_int64,
       bin_reader_int64,
       bin_read_int64,
       bin_read_int64$0,
       bin_nativeint,
       bin_shape_nativeint,
       bin_writer_nativeint,
       bin_write_nativeint,
       bin_reader_nativeint,
       bin_read_nativeint,
       bin_read_nativeint$0,
       bin_ref,
       bin_shape_ref$0,
       bin_writer_ref,
       bin_write_ref,
       bin_reader_ref,
       bin_read_ref,
       bin_read_ref$0,
       bin_lazy,
       bin_shape_lazy$0,
       bin_writer_lazy,
       bin_write_lazy,
       bin_reader_lazy,
       bin_read_lazy,
       bin_read_lazy_t,
       bin_lazy,
       bin_shape_lazy$0,
       bin_writer_lazy,
       bin_write_lazy,
       bin_reader_lazy,
       bin_read_lazy,
       bin_read_lazy$0,
       bin_option,
       bin_shape_option$0,
       bin_writer_option,
       bin_write_option,
       bin_reader_option,
       bin_read_option,
       bin_read_option$0,
       bin_list,
       bin_shape_list$0,
       bin_writer_list,
       bin_write_list,
       bin_reader_list,
       bin_read_list,
       bin_read_list$0,
       bin_array,
       bin_shape_array$0,
       bin_writer_array,
       bin_write_array,
       bin_reader_array,
       bin_read_array,
       bin_read_array$0,
       bin_hashtbl,
       bin_shape_hashtbl$0,
       bin_writer_hashtbl,
       bin_write_hashtbl,
       bin_reader_hashtbl,
       bin_read_hashtbl,
       bin_read_hashtbl$0,
       bin_bigstring,
       bin_shape_bigstring,
       bin_writer_bigstring,
       bin_write_bigstring,
       bin_reader_bigstring,
       bin_read_bigstring,
       bin_read_bigstring$0,
       bin_mat,
       bin_shape_mat,
       bin_writer_mat,
       bin_write_float64_mat,
       bin_reader_mat,
       bin_read_float64_mat,
       bin_read_mat,
       bin_float32_mat,
       bin_shape_float32_mat,
       bin_writer_float32_mat,
       bin_write_float32_mat,
       bin_reader_float32_mat,
       bin_read_float32_mat,
       bin_read_float32_mat$0,
       bin_float64_mat,
       bin_shape_float64_mat,
       bin_writer_float64_mat,
       bin_write_float64_mat,
       bin_reader_float64_mat,
       bin_read_float64_mat,
       bin_read_float64_mat$0,
       bin_vec,
       bin_shape_vec,
       bin_writer_vec,
       bin_write_float64_vec,
       bin_reader_vec,
       bin_read_float64_vec,
       bin_read_vec,
       bin_float32_vec,
       bin_shape_float32_vec,
       bin_writer_float32_vec,
       bin_write_float32_vec,
       bin_reader_float32_vec,
       bin_read_float32_vec,
       bin_read_float32_vec$0,
       bin_float64_vec,
       bin_shape_float64_vec,
       bin_writer_float64_vec,
       bin_write_float64_vec,
       bin_reader_float64_vec,
       bin_read_float64_vec,
       bin_read_float64_vec$0];
    caml_register_global(268,Bin_prot_Std,"Bin_prot__Std");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaW5fcHJvdC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
