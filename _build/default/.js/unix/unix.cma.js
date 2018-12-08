(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_open_descriptor_in=runtime.caml_ml_open_descriptor_in,
     caml_ml_open_descriptor_out=runtime.caml_ml_open_descriptor_out,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_new_string=runtime.caml_new_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_sys_exit=runtime.caml_sys_exit,
     caml_wrap_exception=runtime.caml_wrap_exception,
     unix_inet_addr_of_string=runtime.unix_inet_addr_of_string;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_close_process_full=caml_new_string("close_process_full"),
     cst_close_process=caml_new_string("close_process"),
     cst_close_process_out=caml_new_string("close_process_out"),
     cst_close_process_in=caml_new_string("close_process_in"),
     cst$9=caml_new_string(""),
     shell=caml_new_string("/bin/sh"),
     cst_c$0=caml_new_string("-c"),
     cst_c=caml_new_string("-c"),
     cst_bin_sh$0=caml_new_string("/bin/sh"),
     cst_bin_sh$1=caml_new_string("/bin/sh"),
     cst$8=caml_new_string(""),
     cst_udp$1=caml_new_string("udp"),
     cst_tcp$1=caml_new_string("tcp"),
     cst$5=caml_new_string(""),
     cst$7=caml_new_string(""),
     cst_tcp=caml_new_string("tcp"),
     cst_udp=caml_new_string("udp"),
     cst_udp$0=caml_new_string("udp"),
     cst_tcp$0=caml_new_string("tcp"),
     cst$6=caml_new_string(""),
     cst_0_0_0_0$0=caml_new_string("0.0.0.0"),
     cst_127_0_0_1$0=caml_new_string("127.0.0.1"),
     cst_Unix_sendto=caml_new_string("Unix.sendto"),
     cst_Unix_send=caml_new_string("Unix.send"),
     cst_Unix_recvfrom=caml_new_string("Unix.recvfrom"),
     cst_Unix_recv=caml_new_string("Unix.recv"),
     cst_Unix_single_write=caml_new_string("Unix.single_write"),
     cst_Unix_write=caml_new_string("Unix.write"),
     cst_Unix_read=caml_new_string("Unix.read"),
     cst$4=caml_new_string(""),
     cst_execvpe=caml_new_string("execvpe"),
     cst_bin_sh=caml_new_string("/bin/sh"),
     cst_PATH=caml_new_string("PATH"),
     cst_bin_usr_bin=caml_new_string("/bin:/usr/bin"),
     cst$1=caml_new_string(': "'),
     cst_failed=caml_new_string('" failed'),
     cst_on=caml_new_string(' on "'),
     cst$2=caml_new_string('"'),
     cst$3=caml_new_string(": "),
     cst_E2BIG=caml_new_string("E2BIG"),
     cst_EACCES=caml_new_string("EACCES"),
     cst_EAGAIN=caml_new_string("EAGAIN"),
     cst_EBADF=caml_new_string("EBADF"),
     cst_EBUSY=caml_new_string("EBUSY"),
     cst_ECHILD=caml_new_string("ECHILD"),
     cst_EDEADLK=caml_new_string("EDEADLK"),
     cst_EDOM=caml_new_string("EDOM"),
     cst_EEXIST=caml_new_string("EEXIST"),
     cst_EFAULT=caml_new_string("EFAULT"),
     cst_EFBIG=caml_new_string("EFBIG"),
     cst_EINTR=caml_new_string("EINTR"),
     cst_EINVAL=caml_new_string("EINVAL"),
     cst_EIO=caml_new_string("EIO"),
     cst_EISDIR=caml_new_string("EISDIR"),
     cst_EMFILE=caml_new_string("EMFILE"),
     cst_EMLINK=caml_new_string("EMLINK"),
     cst_ENAMETOOLONG=caml_new_string("ENAMETOOLONG"),
     cst_ENFILE=caml_new_string("ENFILE"),
     cst_ENODEV=caml_new_string("ENODEV"),
     cst_ENOENT=caml_new_string("ENOENT"),
     cst_ENOEXEC=caml_new_string("ENOEXEC"),
     cst_ENOLCK=caml_new_string("ENOLCK"),
     cst_ENOMEM=caml_new_string("ENOMEM"),
     cst_ENOSPC=caml_new_string("ENOSPC"),
     cst_ENOSYS=caml_new_string("ENOSYS"),
     cst_ENOTDIR=caml_new_string("ENOTDIR"),
     cst_ENOTEMPTY=caml_new_string("ENOTEMPTY"),
     cst_ENOTTY=caml_new_string("ENOTTY"),
     cst_ENXIO=caml_new_string("ENXIO"),
     cst_EPERM=caml_new_string("EPERM"),
     cst_EPIPE=caml_new_string("EPIPE"),
     cst_ERANGE=caml_new_string("ERANGE"),
     cst_EROFS=caml_new_string("EROFS"),
     cst_ESPIPE=caml_new_string("ESPIPE"),
     cst_ESRCH=caml_new_string("ESRCH"),
     cst_EXDEV=caml_new_string("EXDEV"),
     cst_EWOULDBLOCK=caml_new_string("EWOULDBLOCK"),
     cst_EINPROGRESS=caml_new_string("EINPROGRESS"),
     cst_EALREADY=caml_new_string("EALREADY"),
     cst_ENOTSOCK=caml_new_string("ENOTSOCK"),
     cst_EDESTADDRREQ=caml_new_string("EDESTADDRREQ"),
     cst_EMSGSIZE=caml_new_string("EMSGSIZE"),
     cst_EPROTOTYPE=caml_new_string("EPROTOTYPE"),
     cst_ENOPROTOOPT=caml_new_string("ENOPROTOOPT"),
     cst_EPROTONOSUPPORT=caml_new_string("EPROTONOSUPPORT"),
     cst_ESOCKTNOSUPPORT=caml_new_string("ESOCKTNOSUPPORT"),
     cst_EOPNOTSUPP=caml_new_string("EOPNOTSUPP"),
     cst_EPFNOSUPPORT=caml_new_string("EPFNOSUPPORT"),
     cst_EAFNOSUPPORT=caml_new_string("EAFNOSUPPORT"),
     cst_EADDRINUSE=caml_new_string("EADDRINUSE"),
     cst_EADDRNOTAVAIL=caml_new_string("EADDRNOTAVAIL"),
     cst_ENETDOWN=caml_new_string("ENETDOWN"),
     cst_ENETUNREACH=caml_new_string("ENETUNREACH"),
     cst_ENETRESET=caml_new_string("ENETRESET"),
     cst_ECONNABORTED=caml_new_string("ECONNABORTED"),
     cst_ECONNRESET=caml_new_string("ECONNRESET"),
     cst_ENOBUFS=caml_new_string("ENOBUFS"),
     cst_EISCONN=caml_new_string("EISCONN"),
     cst_ENOTCONN=caml_new_string("ENOTCONN"),
     cst_ESHUTDOWN=caml_new_string("ESHUTDOWN"),
     cst_ETOOMANYREFS=caml_new_string("ETOOMANYREFS"),
     cst_ETIMEDOUT=caml_new_string("ETIMEDOUT"),
     cst_ECONNREFUSED=caml_new_string("ECONNREFUSED"),
     cst_EHOSTDOWN=caml_new_string("EHOSTDOWN"),
     cst_EHOSTUNREACH=caml_new_string("EHOSTUNREACH"),
     cst_ELOOP=caml_new_string("ELOOP"),
     cst_EOVERFLOW=caml_new_string("EOVERFLOW"),
     cst_Unix_Unix_error=caml_new_string("Unix.Unix_error"),
     cst=caml_new_string(""),
     cst$0=caml_new_string(""),
     cst_Unix_Unix_error$0=caml_new_string("Unix.Unix_error"),
     cst_0_0_0_0=caml_new_string("0.0.0.0"),
     cst_127_0_0_1=caml_new_string("127.0.0.1"),
     cst$10=caml_new_string("::"),
     cst_1=caml_new_string("::1"),
     Stdlib=global_data.Stdlib,
     Sys_error=global_data.Sys_error,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Not_found=global_data.Not_found,
     Invalid_argument=global_data.Invalid_argument,
     Stdlib_list=global_data.Stdlib__list,
     Failure=global_data.Failure,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_filename=global_data.Stdlib__filename,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Unix_error=[248,cst_Unix_Unix_error,runtime.caml_fresh_oo_id(0)];
    caml_call2
     (Stdlib_callback[2],cst_Unix_Unix_error$0,[0,Unix_error,0,cst$0,cst]);
    var
     _p_=[0,1],
     _q_=[0,1],
     _o_=[0,1],
     _l_=[0,1],
     _m_=[0,1],
     _n_=[0,1],
     _j_=[0,1],
     _k_=[0,1],
     _i_=[0,1],
     _h_=[0,1],
     _e_=[0,0],
     _f_=[0,0],
     _g_=[0,0],
     _d_=[255,0,0,0],
     _c_=
      [0,
       [11,caml_new_string("EUNKNOWNERR "),[4,0,0,0,0]],
       caml_new_string("EUNKNOWNERR %d")],
     _b_=
      [0,
       [11,
        caml_new_string("Unix.Unix_error(Unix."),
        [2,
         0,
         [11,
          caml_new_string(", "),
          [3,0,[11,caml_new_string(", "),[3,0,[12,41,0]]]]]]],
       caml_new_string("Unix.Unix_error(Unix.%s, %S, %S)")];
    function _a_(param)
     {if(param[1] === Unix_error)
       {var s=param[4],s$0=param[3],e=param[2];
        if(typeof e === "number")
         {var _dx_=e;
          if(34 <= _dx_)
           switch(_dx_)
            {case 34:var msg=cst_ESPIPE;break;
             case 35:var msg=cst_ESRCH;break;
             case 36:var msg=cst_EXDEV;break;
             case 37:var msg=cst_EWOULDBLOCK;break;
             case 38:var msg=cst_EINPROGRESS;break;
             case 39:var msg=cst_EALREADY;break;
             case 40:var msg=cst_ENOTSOCK;break;
             case 41:var msg=cst_EDESTADDRREQ;break;
             case 42:var msg=cst_EMSGSIZE;break;
             case 43:var msg=cst_EPROTOTYPE;break;
             case 44:var msg=cst_ENOPROTOOPT;break;
             case 45:var msg=cst_EPROTONOSUPPORT;break;
             case 46:var msg=cst_ESOCKTNOSUPPORT;break;
             case 47:var msg=cst_EOPNOTSUPP;break;
             case 48:var msg=cst_EPFNOSUPPORT;break;
             case 49:var msg=cst_EAFNOSUPPORT;break;
             case 50:var msg=cst_EADDRINUSE;break;
             case 51:var msg=cst_EADDRNOTAVAIL;break;
             case 52:var msg=cst_ENETDOWN;break;
             case 53:var msg=cst_ENETUNREACH;break;
             case 54:var msg=cst_ENETRESET;break;
             case 55:var msg=cst_ECONNABORTED;break;
             case 56:var msg=cst_ECONNRESET;break;
             case 57:var msg=cst_ENOBUFS;break;
             case 58:var msg=cst_EISCONN;break;
             case 59:var msg=cst_ENOTCONN;break;
             case 60:var msg=cst_ESHUTDOWN;break;
             case 61:var msg=cst_ETOOMANYREFS;break;
             case 62:var msg=cst_ETIMEDOUT;break;
             case 63:var msg=cst_ECONNREFUSED;break;
             case 64:var msg=cst_EHOSTDOWN;break;
             case 65:var msg=cst_EHOSTUNREACH;break;
             case 66:var msg=cst_ELOOP;break;
             default:var msg=cst_EOVERFLOW}
          else
           switch(_dx_)
            {case 0:var msg=cst_E2BIG;break;
             case 1:var msg=cst_EACCES;break;
             case 2:var msg=cst_EAGAIN;break;
             case 3:var msg=cst_EBADF;break;
             case 4:var msg=cst_EBUSY;break;
             case 5:var msg=cst_ECHILD;break;
             case 6:var msg=cst_EDEADLK;break;
             case 7:var msg=cst_EDOM;break;
             case 8:var msg=cst_EEXIST;break;
             case 9:var msg=cst_EFAULT;break;
             case 10:var msg=cst_EFBIG;break;
             case 11:var msg=cst_EINTR;break;
             case 12:var msg=cst_EINVAL;break;
             case 13:var msg=cst_EIO;break;
             case 14:var msg=cst_EISDIR;break;
             case 15:var msg=cst_EMFILE;break;
             case 16:var msg=cst_EMLINK;break;
             case 17:var msg=cst_ENAMETOOLONG;break;
             case 18:var msg=cst_ENFILE;break;
             case 19:var msg=cst_ENODEV;break;
             case 20:var msg=cst_ENOENT;break;
             case 21:var msg=cst_ENOEXEC;break;
             case 22:var msg=cst_ENOLCK;break;
             case 23:var msg=cst_ENOMEM;break;
             case 24:var msg=cst_ENOSPC;break;
             case 25:var msg=cst_ENOSYS;break;
             case 26:var msg=cst_ENOTDIR;break;
             case 27:var msg=cst_ENOTEMPTY;break;
             case 28:var msg=cst_ENOTTY;break;
             case 29:var msg=cst_ENXIO;break;
             case 30:var msg=cst_EPERM;break;
             case 31:var msg=cst_EPIPE;break;
             case 32:var msg=cst_ERANGE;break;
             default:var msg=cst_EROFS}}
        else
         var x=e[1],msg=caml_call2(Stdlib_printf[4],_c_,x);
        return [0,caml_call4(Stdlib_printf[4],_b_,msg,s$0,s)]}
      return 0}
    caml_call1(Stdlib_printexc[8],_a_);
    function handle_unix_error(f,arg)
     {try
       {var _dw_=caml_call1(f,arg);return _dw_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Unix_error)
         {var
           arg$0=exn[4],
           fun_name=exn[3],
           err=exn[2],
           _du_=caml_check_bound(Stdlib_sys[1],0)[1];
          caml_call1(Stdlib[38],_du_);
          caml_call1(Stdlib[38],cst$1);
          caml_call1(Stdlib[38],fun_name);
          caml_call1(Stdlib[38],cst_failed);
          if(0 < caml_ml_string_length(arg$0))
           {caml_call1(Stdlib[38],cst_on);
            caml_call1(Stdlib[38],arg$0);
            caml_call1(Stdlib[38],cst$2)}
          caml_call1(Stdlib[38],cst$3);
          var _dv_=runtime.unix_error_message(err);
          caml_call1(Stdlib[42],_dv_);
          return caml_call1(Stdlib[88],2)}
        throw exn}}
    function execvpe(name,args,env)
     {try
       {var _do_=runtime.unix_execvpe(name,args,env);return _do_}
      catch(_dp_)
       {_dp_ = caml_wrap_exception(_dp_);
        if(_dp_[1] === Unix_error)
         {var _dn_=_dp_[2];
          if(typeof _dn_ === "number")
           if(25 === _dn_)
            {var
              exec=
               function(file)
                {try
                  {var _ds_=runtime.unix_execve(file,args,env);return _ds_}
                 catch(_dt_)
                  {_dt_ = caml_wrap_exception(_dt_);
                   if(_dt_[1] === Unix_error)
                    {var _dr_=_dt_[2];
                     if(typeof _dr_ === "number")
                      if(21 === _dr_)
                       {var
                         argc=args.length - 1,
                         args$0=
                          0 === argc
                           ?args
                           :caml_call3(Stdlib_array[7],args,1,argc - 1 | 0),
                         new_args=
                          caml_call2(Stdlib_array[5],[0,cst_bin_sh,file],args$0);
                        return runtime.unix_execve
                                (caml_check_bound(new_args,0)[1],new_args,env)}}
                   throw _dt_}};
             if(caml_call2(Stdlib_string[22],name,47))return exec(name);
             try
              {var _dm_=runtime.caml_sys_unsafe_getenv(cst_PATH),_dl_=_dm_}
             catch(_dq_)
              {_dq_ = caml_wrap_exception(_dq_);
               if(_dq_ !== Not_found)throw _dq_;
               var _dl_=cst_bin_usr_bin}
             var
              param$0=caml_call2(Stdlib_string[35],58,_dl_),
              eacces=0,
              param=param$0;
             for(;;)
              {if(param)
                {var
                  rem=param[2],
                  dir=param[1],
                  dir$0=caml_string_equal(dir,cst$4)?Stdlib_filename[1]:dir;
                 try
                  {var _dj_=exec(caml_call2(Stdlib_filename[4],dir$0,name));
                   return _dj_}
                 catch(exn)
                  {exn = caml_wrap_exception(exn);
                   if(exn[1] === Unix_error)
                    {var err=exn[2];
                     if(typeof err === "number")
                      {var _di_=err - 62 | 0;
                       if(4 < _di_ >>> 0)
                        if(-35 <= _di_)
                         var switch$0=0;
                        else
                         {var switcher=_di_ + 62 | 0;
                          switch(switcher)
                           {case 1:var eacces=1,param=rem;continue;
                            case 14:
                            case 17:
                            case 19:
                            case 20:
                            case 26:var switch$0=1;break;
                            default:var switch$0=0}}
                       else
                        var switch$0=2 < (_di_ - 1 | 0) >>> 0?1:0;
                       if(switch$0){var param=rem;continue}}
                     throw exn}
                   throw exn}}
               var _dk_=eacces?1:20;
               throw [0,Unix_error,_dk_,cst_execvpe,name]}}}
        throw _dp_}}
    var stdin=0,stdout=1,stderr=2;
    function read(fd,buf,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_read(fd,buf,ofs,len);
      return caml_call1(Stdlib[2],cst_Unix_read)}
    function write(fd,buf,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[2],cst_Unix_write)}
    function single_write(fd,buf,ofs,len)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_single_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[2],cst_Unix_single_write)}
    function write_substring(fd,buf,ofs,len)
     {return write(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len)}
    function single_write_substring(fd,buf,ofs,len)
     {return single_write(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len)}
    function map_file(fd,opt,kind,layout,shared,dims)
     {if(opt)var sth=opt[1],pos=sth;else var pos=_d_;
      return runtime.caml_unix_map_file_bytecode
              (fd,kind,layout,shared,dims,pos)}
    function pause(param)
     {var sigs=runtime.unix_sigprocmask(1,0);
      return runtime.unix_sigsuspend(sigs)}
    function sleep(duration){return runtime.unix_sleep(duration)}
    var
     inet_addr_any=unix_inet_addr_of_string(cst_0_0_0_0),
     inet_addr_loopback=unix_inet_addr_of_string(cst_127_0_0_1);
    try
     {var _z_=unix_inet_addr_of_string(cst$10),inet_addr_any$0=_z_}
    catch(_dh_)
     {_dh_ = caml_wrap_exception(_dh_);
      if(_dh_[1] !== Failure)throw _dh_;
      var inet_addr_any$0=inet_addr_any}
    try
     {var _y_=unix_inet_addr_of_string(cst_1),inet6_addr_loopback=_y_}
    catch(_dg_)
     {_dg_ = caml_wrap_exception(_dg_);
      if(_dg_[1] !== Failure)throw _dg_;
      var inet6_addr_loopback=inet_addr_loopback}
    function domain_of_sockaddr(param)
     {if(0 === param[0])return 0;
      var a=param[1];
      return 16 === caml_ml_string_length(a)?2:1}
    function recv(fd,buf,ofs,len,flags)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_recv(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[2],cst_Unix_recv)}
    function recvfrom(fd,buf,ofs,len,flags)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_recvfrom(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[2],cst_Unix_recvfrom)}
    function send(fd,buf,ofs,len,flags)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_send(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[2],cst_Unix_send)}
    function sendto(fd,buf,ofs,len,flags,addr)
     {if(0 <= ofs)
       if(0 <= len)
        if(! ((caml_ml_bytes_length(buf) - len | 0) < ofs))
         return runtime.unix_sendto(fd,buf,ofs,len,flags,addr);
      return caml_call1(Stdlib[2],cst_Unix_sendto)}
    function send_substring(fd,buf,ofs,len,flags)
     {return send(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len,flags)}
    function sendto_substring(fd,buf,ofs,len,flags,addr)
     {return sendto(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len,flags,addr)}
    function getsockopt(fd,opt){return runtime.unix_getsockopt(0,fd,opt)}
    function setsockopt(fd,opt,v){return runtime.unix_setsockopt(0,fd,opt,v)}
    function getsockopt_int(fd,opt){return runtime.unix_getsockopt(1,fd,opt)}
    function setsockopt_int(fd,opt,v)
     {return runtime.unix_setsockopt(1,fd,opt,v)}
    function getsockopt_optint(fd,opt)
     {return runtime.unix_getsockopt(2,fd,opt)}
    function setsockopt_optint(fd,opt,v)
     {return runtime.unix_setsockopt(2,fd,opt,v)}
    function getsockopt_float(fd,opt)
     {return runtime.unix_getsockopt(3,fd,opt)}
    function setsockopt_float(fd,opt,v)
     {return runtime.unix_setsockopt(3,fd,opt,v)}
    function getsockopt_error(fd){return runtime.unix_getsockopt(4,fd,0)}
    function getaddrinfo(node,service,opts)
     {try
       {var
         _c8_=runtime.unix_getaddrinfo(node,service,opts),
         _c9_=caml_call1(Stdlib_list[9],_c8_);
        return _c9_}
      catch(_c__)
       {_c__ = caml_wrap_exception(_c__);
        if(_c__[1] === Invalid_argument)
         {var
           opt_socktype=[0,0],
           opt_protocol=[0,0],
           opt_passive=[0,0],
           _cV_=
            function(param)
             {if(typeof param === "number")
               {if(2 === param){opt_passive[1] = 1;return 0}}
              else
               switch(param[0])
                {case 1:var s=param[1];opt_socktype[1] = [0,s];return 0;
                 case 2:var p=param[1];opt_protocol[1] = p;return 0
                 }
              return 0};
          caml_call2(Stdlib_list[15],_cV_,opts);
          var
           get_port=
            function(ty,kind)
             {if(caml_string_equal(service,cst$5))return [0,[0,ty,0],0];
              try
               {var _dd_=[0,[0,ty,runtime.caml_int_of_string(service)],0];
                return _dd_}
              catch(_de_)
               {_de_ = caml_wrap_exception(_de_);
                if(_de_[1] === Failure)
                 try
                  {var
                    _dc_=
                     [0,[0,ty,runtime.unix_getservbyname(service,kind)[3]],0];
                   return _dc_}
                 catch(_df_)
                  {_df_ = caml_wrap_exception(_df_);
                   if(_df_ === Not_found)return 0;
                   throw _df_}
                throw _de_}},
           _cW_=opt_socktype[1];
          if(_cW_)
           var
            _cX_=_cW_[1],
            _cY_=
             1 === _cX_
              ?get_port(1,cst_udp)
              :0 === _cX_
                ?get_port(0,cst_tcp)
                :caml_string_equal(service,cst$7)?[0,[0,_cX_,0],0]:0,
            ports=_cY_;
          else
           var
            _c6_=get_port(1,cst_udp$0),
            _c7_=get_port(0,cst_tcp$0),
            ports=caml_call2(Stdlib[26],_c7_,_c6_);
          if(caml_string_equal(node,cst$6))
           var
            addresses=
             caml_call2(Stdlib_list[31],2,opts)
              ?[0,[0,inet_addr_any,cst_0_0_0_0$0],0]
              :[0,[0,inet_addr_loopback,cst_127_0_0_1$0],0];
          else
           try
            {var
              _c5_=[0,[0,unix_inet_addr_of_string(node),node],0],
              addresses=_c5_}
           catch(_da_)
            {_da_ = caml_wrap_exception(_da_);
             if(_da_[1] !== Failure)throw _da_;
             try
              {var
                he=runtime.unix_gethostbyname(node),
                _c2_=caml_call1(Stdlib_array[11],he[4]),
                _c3_=function(a){return [0,a,he[1]]},
                _c4_=caml_call2(Stdlib_list[17],_c3_,_c2_),
                _c1_=_c4_}
             catch(_db_)
              {_db_ = caml_wrap_exception(_db_);
               if(_db_ !== Not_found)throw _db_;
               var _c1_=0}
             var addresses=_c1_}
          var
           _cZ_=
            function(param)
             {var port=param[2],ty=param[1];
              function _c$_(param)
               {var name=param[2],addr=param[1];
                return [0,1,ty,opt_protocol[1],[1,addr,port],name]}
              return caml_call2(Stdlib_list[17],_c$_,addresses)},
           _c0_=caml_call2(Stdlib_list[17],_cZ_,ports);
          return caml_call1(Stdlib_list[14],_c0_)}
        throw _c__}}
    function getnameinfo(addr,opts)
     {try
       {var _cR_=runtime.unix_getnameinfo(addr,opts);return _cR_}
      catch(_cS_)
       {_cS_ = caml_wrap_exception(_cS_);
        if(_cS_[1] === Invalid_argument)
         {if(0 === addr[0]){var f=addr[1];return [0,cst$8,f]}
          var p=addr[2],a=addr[1];
          try
           {if(caml_call2(Stdlib_list[31],1,opts))throw Not_found;
            var _cQ_=runtime.unix_gethostbyaddr(a)[1],hostname=_cQ_}
          catch(_cU_)
           {_cU_ = caml_wrap_exception(_cU_);
            if(_cU_ !== Not_found)throw _cU_;
            if(caml_call2(Stdlib_list[31],2,opts))throw Not_found;
            var hostname=runtime.unix_string_of_inet_addr(a)}
          try
           {if(caml_call2(Stdlib_list[31],3,opts))throw Not_found;
            var
             kind=caml_call2(Stdlib_list[31],4,opts)?cst_udp$1:cst_tcp$1,
             _cP_=runtime.unix_getservbyport(p,kind)[1],
             service=_cP_}
          catch(_cT_)
           {_cT_ = caml_wrap_exception(_cT_);
            if(_cT_ !== Not_found)throw _cT_;
            var service=caml_call1(Stdlib[22],p)}
          return [0,hostname,service]}
        throw _cS_}}
    function waitpid_non_intr(pid)
     {for(;;)
       try
        {var _cN_=runtime.unix_waitpid(0,pid);return _cN_}
       catch(_cO_)
        {_cO_ = caml_wrap_exception(_cO_);
         if(_cO_[1] === Unix_error)
          {var _cM_=_cO_[2];
           if(typeof _cM_ === "number")if(11 === _cM_)continue}
         throw _cO_}}
    function system(cmd)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {var _cK_=runtime.unix_execv(cst_bin_sh$1,[0,cst_bin_sh$0,cst_c,cmd]);
         return _cK_}
       catch(_cL_){return caml_sys_exit(127)}
      return waitpid_non_intr(id)[2]}
    function file_descr_not_standard(fd)
     {var fd$0=fd;
      for(;;)
       {if(3 <= fd$0)return fd$0;
        var fd$1=runtime.unix_dup(0,fd$0),fd$0=fd$1;
        continue}}
    function safe_close(fd)
     {try
       {var _cI_=runtime.unix_close(fd);return _cI_}
      catch(_cJ_)
       {_cJ_ = caml_wrap_exception(_cJ_);
        if(_cJ_[1] === Unix_error)return 0;
        throw _cJ_}}
    function perform_redirections(new_stdin,new_stdout,new_stderr)
     {var
       new_stdin$0=file_descr_not_standard(new_stdin),
       new_stdout$0=file_descr_not_standard(new_stdout),
       new_stderr$0=file_descr_not_standard(new_stderr);
      runtime.unix_dup2(_e_,new_stdin$0,0);
      runtime.unix_dup2(_f_,new_stdout$0,1);
      runtime.unix_dup2(_g_,new_stderr$0,2);
      safe_close(new_stdin$0);
      safe_close(new_stdout$0);
      return safe_close(new_stderr$0)}
    function create_process(cmd,args,new_stdin,new_stdout,new_stderr)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {perform_redirections(new_stdin,new_stdout,new_stderr);
         var _cG_=runtime.unix_execvp(cmd,args);
         return _cG_}
       catch(_cH_){return caml_sys_exit(127)}
      return id}
    function create_process_env(cmd,args,env,new_stdin,new_stdout,new_stderr)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {perform_redirections(new_stdin,new_stdout,new_stderr);
         var _cE_=execvpe(cmd,args,env);
         return _cE_}
       catch(_cF_){return caml_sys_exit(127)}
      return id}
    var popen_processes=caml_call2(Stdlib_hashtbl[1],0,7);
    function open_proc(cmd,envopt,proc,input,output,error)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       {perform_redirections(input,output,error);
        var argv=[0,shell,cst_c$0,cmd];
        try
         {if(envopt)
           var env=envopt[1],_cC_=runtime.unix_execve(shell,argv,env);
          else
           var _cC_=runtime.unix_execv(shell,argv);
          return _cC_}
        catch(_cD_){return caml_sys_exit(127)}}
      return caml_call3(Stdlib_hashtbl[5],popen_processes,proc,id)}
    function open_process_in(cmd)
     {var
       match=runtime.unix_pipe(_h_,0),
       in_write=match[2],
       in_read=match[1],
       inchan=caml_ml_open_descriptor_in(in_read);
      try
       {open_proc(cmd,0,[1,inchan],stdin,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[82],inchan);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(in_write);
      return inchan}
    function open_process_out(cmd)
     {var
       match=runtime.unix_pipe(_i_,0),
       out_write=match[2],
       out_read=match[1],
       outchan=caml_ml_open_descriptor_out(out_write);
      try
       {open_proc(cmd,0,[2,outchan],out_read,stdout,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[65],outchan);
        runtime.unix_close(out_read);
        throw e}
      runtime.unix_close(out_read);
      return outchan}
    function open_process(cmd)
     {var match=runtime.unix_pipe(_j_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_k_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var
       out_write=match$0[2],
       out_read=match$0[1],
       inchan=caml_ml_open_descriptor_in(in_read),
       outchan=caml_ml_open_descriptor_out(out_write);
      try
       {open_proc(cmd,0,[0,inchan,outchan],out_read,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      return [0,inchan,outchan]}
    function open_process_full(cmd,env)
     {var match=runtime.unix_pipe(_l_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_m_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var out_write=match$0[2],out_read=match$0[1];
      try
       {var match$1=runtime.unix_pipe(_n_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        throw e}
      var
       err_write=match$1[2],
       err_read=match$1[1],
       inchan=caml_ml_open_descriptor_in(in_read),
       outchan=caml_ml_open_descriptor_out(out_write),
       errchan=caml_ml_open_descriptor_in(err_read);
      try
       {open_proc
         (cmd,[0,env],[3,inchan,outchan,errchan],out_read,in_write,err_write)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(err_read);
        runtime.unix_close(err_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      runtime.unix_close(err_write);
      return [0,inchan,outchan,errchan]}
    function find_proc_id(fun_name,proc)
     {try
       {var pid=caml_call2(Stdlib_hashtbl[6],popen_processes,proc);
        caml_call2(Stdlib_hashtbl[10],popen_processes,proc);
        return pid}
      catch(_cB_)
       {_cB_ = caml_wrap_exception(_cB_);
        if(_cB_ === Not_found)throw [0,Unix_error,3,fun_name,cst$9];
        throw _cB_}}
    function close_process_in(inchan)
     {var pid=find_proc_id(cst_close_process_in,[1,inchan]);
      caml_call1(Stdlib[82],inchan);
      return waitpid_non_intr(pid)[2]}
    function close_process_out(outchan)
     {var pid=find_proc_id(cst_close_process_out,[2,outchan]);
      try
       {caml_call1(Stdlib[65],outchan)}
      catch(_cA_)
       {_cA_ = caml_wrap_exception(_cA_);if(_cA_[1] !== Sys_error)throw _cA_}
      return waitpid_non_intr(pid)[2]}
    function close_process(param)
     {var
       outchan=param[2],
       inchan=param[1],
       pid=find_proc_id(cst_close_process,[0,inchan,outchan]);
      caml_call1(Stdlib[82],inchan);
      try
       {caml_call1(Stdlib[65],outchan)}
      catch(_cz_)
       {_cz_ = caml_wrap_exception(_cz_);if(_cz_[1] !== Sys_error)throw _cz_}
      return waitpid_non_intr(pid)[2]}
    function close_process_full(param)
     {var
       errchan=param[3],
       outchan=param[2],
       inchan=param[1],
       pid=find_proc_id(cst_close_process_full,[3,inchan,outchan,errchan]);
      caml_call1(Stdlib[82],inchan);
      try
       {caml_call1(Stdlib[65],outchan)}
      catch(_cy_)
       {_cy_ = caml_wrap_exception(_cy_);if(_cy_[1] !== Sys_error)throw _cy_}
      caml_call1(Stdlib[82],errchan);
      return waitpid_non_intr(pid)[2]}
    function open_connection(sockaddr)
     {var sock=runtime.unix_socket(_o_,domain_of_sockaddr(sockaddr),0,0);
      try
       {runtime.unix_connect(sock,sockaddr);
        var
         _cw_=caml_ml_open_descriptor_out(sock),
         _cx_=[0,caml_ml_open_descriptor_in(sock),_cw_];
        return _cx_}
      catch(exn)
       {exn = caml_wrap_exception(exn);runtime.unix_close(sock);throw exn}}
    function shutdown_connection(inchan)
     {return runtime.unix_shutdown(runtime.caml_channel_descriptor(inchan),1)}
    function accept_non_intr(s)
     {for(;;)
       try
        {var _cu_=runtime.unix_accept(_p_,s);return _cu_}
       catch(_cv_)
        {_cv_ = caml_wrap_exception(_cv_);
         if(_cv_[1] === Unix_error)
          {var _ct_=_cv_[2];
           if(typeof _ct_ === "number")if(11 === _ct_)continue}
         throw _cv_}}
    function establish_server(server_fun,sockaddr)
     {var sock=runtime.unix_socket(_q_,domain_of_sockaddr(sockaddr),0,0);
      runtime.unix_setsockopt(0,sock,2,1);
      runtime.unix_bind(sock,sockaddr);
      runtime.unix_listen(sock,5);
      for(;;)
       {var match=accept_non_intr(sock),s=match[1],id=runtime.unix_fork(0);
        if(0 === id)
         {if(0 !== runtime.unix_fork(0))caml_sys_exit(0);
          runtime.unix_close(sock);
          var
           inchan=caml_ml_open_descriptor_in(s),
           outchan=caml_ml_open_descriptor_out(s);
          caml_call2(server_fun,inchan,outchan);
          caml_call1(Stdlib[88],0)}
        else
         {runtime.unix_close(s);waitpid_non_intr(id)}
        continue}}
    function setsid(_cs_){return runtime.unix_setsid(_cs_)}
    function tcflow(_cr_,_cq_){return runtime.unix_tcflow(_cr_,_cq_)}
    function tcflush(_cp_,_co_){return runtime.unix_tcflush(_cp_,_co_)}
    function tcdrain(_cn_){return runtime.unix_tcdrain(_cn_)}
    function tcsendbreak(_cm_,_cl_)
     {return runtime.unix_tcsendbreak(_cm_,_cl_)}
    function tcsetattr(_ck_,_cj_,_ci_)
     {return runtime.unix_tcsetattr(_ck_,_cj_,_ci_)}
    function tcgetattr(_ch_){return runtime.unix_tcgetattr(_ch_)}
    function getservbyport(_cg_,_cf_)
     {return runtime.unix_getservbyport(_cg_,_cf_)}
    function getservbyname(_ce_,_cd_)
     {return runtime.unix_getservbyname(_ce_,_cd_)}
    function getprotobynumber(_cc_)
     {return runtime.unix_getprotobynumber(_cc_)}
    function getprotobyname(_cb_){return runtime.unix_getprotobyname(_cb_)}
    function gethostbyaddr(_ca_){return runtime.unix_gethostbyaddr(_ca_)}
    function gethostbyname(_b$_){return runtime.unix_gethostbyname(_b$_)}
    function gethostname(_b__){return runtime.unix_gethostname(_b__)}
    function getpeername(_b9_){return runtime.unix_getpeername(_b9_)}
    function getsockname(_b8_){return runtime.unix_getsockname(_b8_)}
    function shutdown(_b7_,_b6_){return runtime.unix_shutdown(_b7_,_b6_)}
    function listen(_b5_,_b4_){return runtime.unix_listen(_b5_,_b4_)}
    function connect(_b3_,_b2_){return runtime.unix_connect(_b3_,_b2_)}
    function bind(_b1_,_b0_){return runtime.unix_bind(_b1_,_b0_)}
    function accept(_bZ_,_bY_){return runtime.unix_accept(_bZ_,_bY_)}
    function socketpair(_bX_,_bW_,_bV_,_bU_)
     {return runtime.unix_socketpair(_bX_,_bW_,_bV_,_bU_)}
    function socket(_bT_,_bS_,_bR_,_bQ_)
     {return runtime.unix_socket(_bT_,_bS_,_bR_,_bQ_)}
    function string_of_inet_addr(_bP_)
     {return runtime.unix_string_of_inet_addr(_bP_)}
    function inet_addr_of_string(_bO_){return unix_inet_addr_of_string(_bO_)}
    function getgrgid(_bN_){return runtime.unix_getgrgid(_bN_)}
    function getpwuid(_bM_){return runtime.unix_getpwuid(_bM_)}
    function getgrnam(_bL_){return runtime.unix_getgrnam(_bL_)}
    function getpwnam(_bK_){return runtime.unix_getpwnam(_bK_)}
    function getlogin(_bJ_){return runtime.unix_getlogin(_bJ_)}
    function initgroups(_bI_,_bH_){return runtime.unix_initgroups(_bI_,_bH_)}
    function setgroups(_bG_){return runtime.unix_setgroups(_bG_)}
    function getgroups(_bF_){return runtime.unix_getgroups(_bF_)}
    function setgid(_bE_){return runtime.unix_setgid(_bE_)}
    function getegid(_bD_){return runtime.unix_getegid(_bD_)}
    function getgid(_bC_){return runtime.unix_getgid(_bC_)}
    function setuid(_bB_){return runtime.unix_setuid(_bB_)}
    function geteuid(_bA_){return runtime.unix_geteuid(_bA_)}
    function getuid(_bz_){return runtime.unix_getuid(_bz_)}
    function setitimer(_by_,_bx_){return runtime.unix_setitimer(_by_,_bx_)}
    function getitimer(_bw_){return runtime.unix_getitimer(_bw_)}
    function utimes(_bv_,_bu_,_bt_)
     {return runtime.unix_utimes(_bv_,_bu_,_bt_)}
    function times(_bs_){return runtime.unix_times(_bs_)}
    function _r_(_br_){return runtime.unix_sleep(_br_)}
    function alarm(_bq_){return runtime.unix_alarm(_bq_)}
    var
     mktime=runtime.unix_mktime,
     localtime=runtime.unix_localtime,
     gmtime=runtime.unix_gmtime;
    function gettimeofday(_bp_){return runtime.unix_gettimeofday(_bp_)}
    function time(_bo_){return runtime.unix_time(_bo_)}
    function sigsuspend(_bn_){return runtime.unix_sigsuspend(_bn_)}
    function sigpending(_bm_){return runtime.unix_sigpending(_bm_)}
    function sigprocmask(_bl_,_bk_)
     {return runtime.unix_sigprocmask(_bl_,_bk_)}
    function kill(_bj_,_bi_){return runtime.unix_kill(_bj_,_bi_)}
    function lockf(_bh_,_bg_,_bf_){return runtime.unix_lockf(_bh_,_bg_,_bf_)}
    function select(_be_,_bd_,_bc_,_bb_)
     {return runtime.unix_select(_be_,_bd_,_bc_,_bb_)}
    function readlink(_ba_){return runtime.unix_readlink(_ba_)}
    function has_symlink(_a$_){return runtime.unix_has_symlink(_a$_)}
    function symlink(_a__,_a9_,_a8_)
     {return runtime.unix_symlink(_a__,_a9_,_a8_)}
    function mkfifo(_a7_,_a6_){return runtime.unix_mkfifo(_a7_,_a6_)}
    function pipe(_a5_,_a4_){return runtime.unix_pipe(_a5_,_a4_)}
    function closedir(_a3_){return runtime.unix_closedir(_a3_)}
    function rewinddir(_a2_){return runtime.unix_rewinddir(_a2_)}
    function readdir(_a1_){return runtime.unix_readdir(_a1_)}
    function opendir(_a0_){return runtime.unix_opendir(_a0_)}
    function chroot(_aZ_){return runtime.unix_chroot(_aZ_)}
    function getcwd(_aY_){return runtime.unix_getcwd(_aY_)}
    function chdir(_aX_){return runtime.unix_chdir(_aX_)}
    function rmdir(_aW_){return runtime.unix_rmdir(_aW_)}
    function mkdir(_aV_,_aU_){return runtime.unix_mkdir(_aV_,_aU_)}
    function clear_close_on_exec(_aT_)
     {return runtime.unix_clear_close_on_exec(_aT_)}
    function set_close_on_exec(_aS_)
     {return runtime.unix_set_close_on_exec(_aS_)}
    function clear_nonblock(_aR_){return runtime.unix_clear_nonblock(_aR_)}
    function set_nonblock(_aQ_){return runtime.unix_set_nonblock(_aQ_)}
    function dup2(_aP_,_aO_,_aN_){return runtime.unix_dup2(_aP_,_aO_,_aN_)}
    function dup(_aM_,_aL_){return runtime.unix_dup(_aM_,_aL_)}
    function access(_aK_,_aJ_){return runtime.unix_access(_aK_,_aJ_)}
    function umask(_aI_){return runtime.unix_umask(_aI_)}
    function fchown(_aH_,_aG_,_aF_)
     {return runtime.unix_fchown(_aH_,_aG_,_aF_)}
    function chown(_aE_,_aD_,_aC_){return runtime.unix_chown(_aE_,_aD_,_aC_)}
    function fchmod(_aB_,_aA_){return runtime.unix_fchmod(_aB_,_aA_)}
    function chmod(_az_,_ay_){return runtime.unix_chmod(_az_,_ay_)}
    function link(_ax_,_aw_){return runtime.unix_link(_ax_,_aw_)}
    function rename(_av_,_au_){return runtime.unix_rename(_av_,_au_)}
    function unlink(_at_){return runtime.unix_unlink(_at_)}
    function _s_(_as_){return runtime.unix_fstat_64(_as_)}
    function _t_(_ar_){return runtime.unix_lstat_64(_ar_)}
    function _u_(_aq_){return runtime.unix_stat_64(_aq_)}
    function _v_(_ap_,_ao_){return runtime.unix_ftruncate_64(_ap_,_ao_)}
    function _w_(_an_,_am_){return runtime.unix_truncate_64(_an_,_am_)}
    var
     LargeFile=
      [0,
       function(_al_,_ak_,_aj_){return runtime.unix_lseek_64(_al_,_ak_,_aj_)},
       _w_,
       _v_,
       _u_,
       _t_,
       _s_];
    function isatty(_ai_){return runtime.unix_isatty(_ai_)}
    function fstat(_ah_){return runtime.unix_fstat(_ah_)}
    function lstat(_ag_){return runtime.unix_lstat(_ag_)}
    function stat(_af_){return runtime.unix_stat(_af_)}
    function ftruncate(_ae_,_ad_){return runtime.unix_ftruncate(_ae_,_ad_)}
    function truncate(_ac_,_ab_){return runtime.unix_truncate(_ac_,_ab_)}
    function lseek(_aa_,_$_,___){return runtime.unix_lseek(_aa_,_$_,___)}
    function descr_of_out_channel(_Z_)
     {return runtime.caml_channel_descriptor(_Z_)}
    function descr_of_in_channel(_Y_)
     {return runtime.caml_channel_descriptor(_Y_)}
    var
     out_channel_of_descr=caml_ml_open_descriptor_out,
     in_channel_of_descr=caml_ml_open_descriptor_in;
    function close(_X_){return runtime.unix_close(_X_)}
    function openfile(_W_,_V_,_U_){return runtime.unix_open(_W_,_V_,_U_)}
    function nice(_T_){return runtime.unix_nice(_T_)}
    function getppid(_S_){return runtime.unix_getppid(_S_)}
    function getpid(_R_){return runtime.unix_getpid(_R_)}
    function waitpid(_Q_,_P_){return runtime.unix_waitpid(_Q_,_P_)}
    function wait(_O_){return runtime.unix_wait(_O_)}
    function fork(_N_){return runtime.unix_fork(_N_)}
    function execvp(_M_,_L_){return runtime.unix_execvp(_M_,_L_)}
    function execve(_K_,_J_,_I_){return runtime.unix_execve(_K_,_J_,_I_)}
    function execv(_H_,_G_){return runtime.unix_execv(_H_,_G_)}
    function putenv(_F_,_E_){return runtime.unix_putenv(_F_,_E_)}
    function unsafe_getenv(_D_){return runtime.caml_sys_unsafe_getenv(_D_)}
    var getenv=runtime.caml_sys_getenv;
    function _x_(_C_){return runtime.unix_environment_unsafe(_C_)}
    function environment(_B_){return runtime.unix_environment(_B_)}
    function error_message(_A_){return runtime.unix_error_message(_A_)}
    var
     include=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       _x_,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       _r_,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(146,include,"Unix");
    var
     UnixLabels=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(147,UnixLabels,"UnixLabels");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1bml4LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXX0=
