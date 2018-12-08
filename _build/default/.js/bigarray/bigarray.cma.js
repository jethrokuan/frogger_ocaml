(function(joo_global_object)
   {"use strict";
    var runtime=joo_global_object.jsoo_runtime;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     Stdlib_bigarray=global_data.Stdlib__bigarray,
     reshape_3=Stdlib_bigarray[30],
     reshape_2=Stdlib_bigarray[29],
     reshape_1=Stdlib_bigarray[28],
     reshape_0=Stdlib_bigarray[27],
     reshape=Stdlib_bigarray[26],
     array3_of_genarray=Stdlib_bigarray[25],
     array2_of_genarray=Stdlib_bigarray[24],
     array1_of_genarray=Stdlib_bigarray[23],
     array0_of_genarray=Stdlib_bigarray[22],
     Array0=Stdlib_bigarray[18],
     fortran_layout=Stdlib_bigarray[16],
     c_layout=Stdlib_bigarray[15],
     kind_size_in_bytes=Stdlib_bigarray[14],
     char$0=Stdlib_bigarray[13],
     nativeint=Stdlib_bigarray[12],
     int64=Stdlib_bigarray[11],
     int32=Stdlib_bigarray[10],
     int$0=Stdlib_bigarray[9],
     int16_unsigned=Stdlib_bigarray[8],
     int16_signed=Stdlib_bigarray[7],
     int8_unsigned=Stdlib_bigarray[6],
     int8_signed=Stdlib_bigarray[5],
     complex64=Stdlib_bigarray[4],
     complex32=Stdlib_bigarray[3],
     float64=Stdlib_bigarray[2],
     float32=Stdlib_bigarray[1],
     include=Stdlib_bigarray[17],
     dims=include[1],
     size_in_bytes=include[2],
     _a_=[255,0,0,0];
    function map_file(fd,opt,kind,layout,shared,dims)
     {if(opt)var sth=opt[1],pos=sth;else var pos=_a_;
      return runtime.caml_ba_map_file_bytecode(fd,kind,layout,shared,dims,pos)}
    var
     Genarray=[0,dims,size_in_bytes,map_file],
     include$0=Stdlib_bigarray[19],
     create=include$0[1],
     change_layout=include$0[2],
     size_in_bytes$0=include$0[3],
     slice=include$0[4],
     of_array=include$0[5];
    function map_file$0(fd,pos,kind,layout,shared,dim)
     {return caml_call1
              (array1_of_genarray,
               caml_call6(Genarray[3],fd,pos,kind,layout,shared,[0,dim]))}
    var
     Array1=[0,create,change_layout,size_in_bytes$0,slice,of_array,map_file$0],
     include$1=Stdlib_bigarray[20],
     create$0=include$1[1],
     change_layout$0=include$1[2],
     size_in_bytes$1=include$1[3],
     slice_left=include$1[4],
     slice_right=include$1[5],
     of_array$0=include$1[6];
    function map_file$1(fd,pos,kind,layout,shared,dim1,dim2)
     {return caml_call1
              (array2_of_genarray,
               caml_call6(Genarray[3],fd,pos,kind,layout,shared,[0,dim1,dim2]))}
    var
     Array2=
      [0,
       create$0,
       change_layout$0,
       size_in_bytes$1,
       slice_left,
       slice_right,
       of_array$0,
       map_file$1],
     include$2=Stdlib_bigarray[21],
     create$1=include$2[1],
     change_layout$1=include$2[2],
     size_in_bytes$2=include$2[3],
     slice_left_1=include$2[4],
     slice_right_1=include$2[5],
     slice_left_2=include$2[6],
     slice_right_2=include$2[7],
     of_array$1=include$2[8];
    function map_file$2(fd,pos,kind,layout,shared,dim1,dim2,dim3)
     {return caml_call1
              (array3_of_genarray,
               caml_call6
                (Genarray[3],fd,pos,kind,layout,shared,[0,dim1,dim2,dim3]))}
    var
     Array3=
      [0,
       create$1,
       change_layout$1,
       size_in_bytes$2,
       slice_left_1,
       slice_right_1,
       slice_left_2,
       slice_right_2,
       of_array$1,
       map_file$2],
     Bigarray=
      [0,
       float32,
       float64,
       complex32,
       complex64,
       int8_signed,
       int8_unsigned,
       int16_signed,
       int16_unsigned,
       int$0,
       int32,
       int64,
       nativeint,
       char$0,
       kind_size_in_bytes,
       c_layout,
       fortran_layout,
       Array0,
       array0_of_genarray,
       array1_of_genarray,
       array2_of_genarray,
       array3_of_genarray,
       reshape,
       reshape_0,
       reshape_1,
       reshape_2,
       reshape_3,
       Genarray,
       Array1,
       Array2,
       Array3];
    runtime.caml_register_global(2,Bigarray,"Bigarray");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaWdhcnJheS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsibWFwX2ZpbGUiLCJmZCIsIm9wdCIsImtpbmQiLCJsYXlvdXQiLCJzaGFyZWQiLCJkaW1zIiwic3RoIiwicG9zIiwibWFwX2ZpbGUkMCIsImRpbSIsIm1hcF9maWxlJDEiLCJkaW0xIiwiZGltMiIsIm1hcF9maWxlJDIiLCJkaW0zIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBMkJNQSxTQUFTQyxHQUFLQyxJQUFVQyxLQUFLQyxPQUFPQyxPQUFPQztNQUM3QyxHQURnQkosSUFBTSxRQUFOQSxXQUFNSyxhQUFOQztNQUNoQix5Q0FEV1AsR0FBZUUsS0FBS0MsT0FBT0MsT0FBT0MsS0FBN0JFLElBQzJCOztvQ0FEekNSOzs7Ozs7O2FBTUFTLFdBQVNSLEdBQUlPLElBQUlMLEtBQUtDLE9BQU9DLE9BQU9LO01BRXBDOztzQ0FGU1QsR0FBSU8sSUFBSUwsS0FBS0MsT0FBT0MsVUFBT0ssTUFFa0I7O21FQUZ0REQ7Ozs7Ozs7O2FBT0FFLFdBQVNWLEdBQUlPLElBQUlMLEtBQUtDLE9BQU9DLE9BQU9PLEtBQUtDO01BRXpDOztzQ0FGU1osR0FBSU8sSUFBSUwsS0FBS0MsT0FBT0MsVUFBT08sS0FBS0MsT0FFbUI7Ozs7Ozs7Ozs7T0FGNURGOzs7Ozs7Ozs7O2FBT0FHLFdBQVNiLEdBQUlPLElBQUlMLEtBQUtDLE9BQU9DLE9BQU9PLEtBQUtDLEtBQUtFO01BRTlDOzs7NkJBRlNkLEdBQUlPLElBQUlMLEtBQUtDLE9BQU9DLFVBQU9PLEtBQUtDLEtBQUtFLE9BRW1COzs7Ozs7Ozs7Ozs7T0FGakVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1UiLCJzb3VyY2VzIjpbIi9uaXgvc3RvcmUvMDZzYXFmc21yNDd2MDJ4NDVmeTlwNm00aDk1czUyMHItb2NhbWwtNC4wNy4xL2xpYi9vY2FtbC9iaWdhcnJheS5tbCJdLCJzb3VyY2VzQ29udGVudCI6WyIoKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9DYW1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgTWFudWVsIFNlcnJhbm8gZXQgWGF2aWVyIExlcm95LCBJTlJJQSBSb2NxdWVuY291cnQgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIENvcHlyaWdodCAyMDAwIEluc3RpdHV0IE5hdGlvbmFsIGRlIFJlY2hlcmNoZSBlbiBJbmZvcm1hdGlxdWUgZXQgICAgICopXG4oKiAgICAgZW4gQXV0b21hdGlxdWUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuICBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mICAgICopXG4oKiAgIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAyLjEsIHdpdGggdGhlICAgICAgICAgICopXG4oKiAgIHNwZWNpYWwgZXhjZXB0aW9uIG9uIGxpbmtpbmcgZGVzY3JpYmVkIGluIHRoZSBmaWxlIExJQ0VOU0UuICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG5cbigqIE1vZHVsZSBbQmlnYXJyYXldOiBsYXJnZSwgbXVsdGktZGltZW5zaW9uYWwsIG51bWVyaWNhbCBhcnJheXMgKilcblxuKCogVGhlc2UgdHlwZXMgaW4gbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgdGFibGVzIGluXG4gICAuLi90eXBpbmcvdHlwZW9wdC5tbCAqKVxuXG50eXBlIGZsb2F0MzJfZWx0ID0gRmxvYXQzMl9lbHRcbnR5cGUgZmxvYXQ2NF9lbHQgPSBGbG9hdDY0X2VsdFxudHlwZSBpbnQ4X3NpZ25lZF9lbHQgPSBJbnQ4X3NpZ25lZF9lbHRcbnR5cGUgaW50OF91bnNpZ25lZF9lbHQgPSBJbnQ4X3Vuc2lnbmVkX2VsdFxudHlwZSBpbnQxNl9zaWduZWRfZWx0ID0gSW50MTZfc2lnbmVkX2VsdFxudHlwZSBpbnQxNl91bnNpZ25lZF9lbHQgPSBJbnQxNl91bnNpZ25lZF9lbHRcbnR5cGUgaW50MzJfZWx0ID0gSW50MzJfZWx0XG50eXBlIGludDY0X2VsdCA9IEludDY0X2VsdFxudHlwZSBpbnRfZWx0ID0gSW50X2VsdFxudHlwZSBuYXRpdmVpbnRfZWx0ID0gTmF0aXZlaW50X2VsdFxudHlwZSBjb21wbGV4MzJfZWx0ID0gQ29tcGxleDMyX2VsdFxudHlwZSBjb21wbGV4NjRfZWx0ID0gQ29tcGxleDY0X2VsdFxuXG50eXBlICgnYSwgJ2IpIGtpbmQgPVxuICAgIEZsb2F0MzIgOiAoZmxvYXQsIGZsb2F0MzJfZWx0KSBraW5kXG4gIHwgRmxvYXQ2NCA6IChmbG9hdCwgZmxvYXQ2NF9lbHQpIGtpbmRcbiAgfCBJbnQ4X3NpZ25lZCA6IChpbnQsIGludDhfc2lnbmVkX2VsdCkga2luZFxuICB8IEludDhfdW5zaWduZWQgOiAoaW50LCBpbnQ4X3Vuc2lnbmVkX2VsdCkga2luZFxuICB8IEludDE2X3NpZ25lZCA6IChpbnQsIGludDE2X3NpZ25lZF9lbHQpIGtpbmRcbiAgfCBJbnQxNl91bnNpZ25lZCA6IChpbnQsIGludDE2X3Vuc2lnbmVkX2VsdCkga2luZFxuICB8IEludDMyIDogKGludDMyLCBpbnQzMl9lbHQpIGtpbmRcbiAgfCBJbnQ2NCA6IChpbnQ2NCwgaW50NjRfZWx0KSBraW5kXG4gIHwgSW50IDogKGludCwgaW50X2VsdCkga2luZFxuICB8IE5hdGl2ZWludCA6IChuYXRpdmVpbnQsIG5hdGl2ZWludF9lbHQpIGtpbmRcbiAgfCBDb21wbGV4MzIgOiAoQ29tcGxleC50LCBjb21wbGV4MzJfZWx0KSBraW5kXG4gIHwgQ29tcGxleDY0IDogKENvbXBsZXgudCwgY29tcGxleDY0X2VsdCkga2luZFxuICB8IENoYXIgOiAoY2hhciwgaW50OF91bnNpZ25lZF9lbHQpIGtpbmRcblxudHlwZSBjX2xheW91dCA9IENfbGF5b3V0X3R5cFxudHlwZSBmb3J0cmFuX2xheW91dCA9IEZvcnRyYW5fbGF5b3V0X3R5cCAoKiopXG5cbnR5cGUgJ2EgbGF5b3V0ID1cbiAgICBDX2xheW91dDogY19sYXlvdXQgbGF5b3V0XG4gIHwgRm9ydHJhbl9sYXlvdXQ6IGZvcnRyYW5fbGF5b3V0IGxheW91dFxuXG4oKiBLZWVwIHRob3NlIGNvbnN0YW50cyBpbiBzeW5jIHdpdGggdGhlIGNhbWxfYmFfa2luZCBlbnVtZXJhdGlvblxuICAgaW4gYmlnYXJyYXkuaCAqKVxuXG5sZXQgZmxvYXQzMiA9IEZsb2F0MzJcbmxldCBmbG9hdDY0ID0gRmxvYXQ2NFxubGV0IGludDhfc2lnbmVkID0gSW50OF9zaWduZWRcbmxldCBpbnQ4X3Vuc2lnbmVkID0gSW50OF91bnNpZ25lZFxubGV0IGludDE2X3NpZ25lZCA9IEludDE2X3NpZ25lZFxubGV0IGludDE2X3Vuc2lnbmVkID0gSW50MTZfdW5zaWduZWRcbmxldCBpbnQzMiA9IEludDMyXG5sZXQgaW50NjQgPSBJbnQ2NFxubGV0IGludCA9IEludFxubGV0IG5hdGl2ZWludCA9IE5hdGl2ZWludFxubGV0IGNvbXBsZXgzMiA9IENvbXBsZXgzMlxubGV0IGNvbXBsZXg2NCA9IENvbXBsZXg2NFxubGV0IGNoYXIgPSBDaGFyXG5cbmxldCBraW5kX3NpemVfaW5fYnl0ZXMgOiB0eXBlIGEgYi4gKGEsIGIpIGtpbmQgLT4gaW50ID0gZnVuY3Rpb25cbiAgfCBGbG9hdDMyIC0+IDRcbiAgfCBGbG9hdDY0IC0+IDhcbiAgfCBJbnQ4X3NpZ25lZCAtPiAxXG4gIHwgSW50OF91bnNpZ25lZCAtPiAxXG4gIHwgSW50MTZfc2lnbmVkIC0+IDJcbiAgfCBJbnQxNl91bnNpZ25lZCAtPiAyXG4gIHwgSW50MzIgLT4gNFxuICB8IEludDY0IC0+IDhcbiAgfCBJbnQgLT4gU3lzLndvcmRfc2l6ZSAvIDhcbiAgfCBOYXRpdmVpbnQgLT4gU3lzLndvcmRfc2l6ZSAvIDhcbiAgfCBDb21wbGV4MzIgLT4gOFxuICB8IENvbXBsZXg2NCAtPiAxNlxuICB8IENoYXIgLT4gMVxuXG4oKiBLZWVwIHRob3NlIGNvbnN0YW50cyBpbiBzeW5jIHdpdGggdGhlIGNhbWxfYmFfbGF5b3V0IGVudW1lcmF0aW9uXG4gICBpbiBiaWdhcnJheS5oICopXG5cbmxldCBjX2xheW91dCA9IENfbGF5b3V0XG5sZXQgZm9ydHJhbl9sYXlvdXQgPSBGb3J0cmFuX2xheW91dFxuXG5tb2R1bGUgR2VuYXJyYXkgPSBzdHJ1Y3RcbiAgdHlwZSAoJ2EsICdiLCAnYykgdFxuICBleHRlcm5hbCBjcmVhdGU6ICgnYSwgJ2IpIGtpbmQgLT4gJ2MgbGF5b3V0IC0+IGludCBhcnJheSAtPiAoJ2EsICdiLCAnYykgdFxuICAgICA9IFwiY2FtbF9iYV9jcmVhdGVcIlxuICBleHRlcm5hbCBnZXQ6ICgnYSwgJ2IsICdjKSB0IC0+IGludCBhcnJheSAtPiAnYVxuICAgICA9IFwiY2FtbF9iYV9nZXRfZ2VuZXJpY1wiXG4gIGV4dGVybmFsIHNldDogKCdhLCAnYiwgJ2MpIHQgLT4gaW50IGFycmF5IC0+ICdhIC0+IHVuaXRcbiAgICAgPSBcImNhbWxfYmFfc2V0X2dlbmVyaWNcIlxuICBleHRlcm5hbCBudW1fZGltczogKCdhLCAnYiwgJ2MpIHQgLT4gaW50ID0gXCJjYW1sX2JhX251bV9kaW1zXCJcbiAgZXh0ZXJuYWwgbnRoX2RpbTogKCdhLCAnYiwgJ2MpIHQgLT4gaW50IC0+IGludCA9IFwiY2FtbF9iYV9kaW1cIlxuICBsZXQgZGltcyBhID1cbiAgICBsZXQgbiA9IG51bV9kaW1zIGEgaW5cbiAgICBsZXQgZCA9IEFycmF5Lm1ha2UgbiAwIGluXG4gICAgZm9yIGkgPSAwIHRvIG4tMSBkbyBkLihpKSA8LSBudGhfZGltIGEgaSBkb25lO1xuICAgIGRcblxuICBleHRlcm5hbCBraW5kOiAoJ2EsICdiLCAnYykgdCAtPiAoJ2EsICdiKSBraW5kID0gXCJjYW1sX2JhX2tpbmRcIlxuICBleHRlcm5hbCBsYXlvdXQ6ICgnYSwgJ2IsICdjKSB0IC0+ICdjIGxheW91dCA9IFwiY2FtbF9iYV9sYXlvdXRcIlxuICBleHRlcm5hbCBjaGFuZ2VfbGF5b3V0OiAoJ2EsICdiLCAnYykgdCAtPiAnZCBsYXlvdXQgLT4gKCdhLCAnYiwgJ2QpIHRcbiAgICAgPSBcImNhbWxfYmFfY2hhbmdlX2xheW91dFwiXG5cbiAgbGV0IHNpemVfaW5fYnl0ZXMgYXJyID1cbiAgICAoa2luZF9zaXplX2luX2J5dGVzIChraW5kIGFycikpICogKEFycmF5LmZvbGRfbGVmdCAoICogKSAxIChkaW1zIGFycikpXG5cbiAgZXh0ZXJuYWwgc3ViX2xlZnQ6ICgnYSwgJ2IsIGNfbGF5b3V0KSB0IC0+IGludCAtPiBpbnQgLT4gKCdhLCAnYiwgY19sYXlvdXQpIHRcbiAgICAgPSBcImNhbWxfYmFfc3ViXCJcbiAgZXh0ZXJuYWwgc3ViX3JpZ2h0OiAoJ2EsICdiLCBmb3J0cmFuX2xheW91dCkgdCAtPiBpbnQgLT4gaW50IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICgnYSwgJ2IsIGZvcnRyYW5fbGF5b3V0KSB0XG4gICAgID0gXCJjYW1sX2JhX3N1YlwiXG4gIGV4dGVybmFsIHNsaWNlX2xlZnQ6ICgnYSwgJ2IsIGNfbGF5b3V0KSB0IC0+IGludCBhcnJheSAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoJ2EsICdiLCBjX2xheW91dCkgdFxuICAgICA9IFwiY2FtbF9iYV9zbGljZVwiXG4gIGV4dGVybmFsIHNsaWNlX3JpZ2h0OiAoJ2EsICdiLCBmb3J0cmFuX2xheW91dCkgdCAtPiBpbnQgYXJyYXkgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKCdhLCAnYiwgZm9ydHJhbl9sYXlvdXQpIHRcbiAgICAgPSBcImNhbWxfYmFfc2xpY2VcIlxuICBleHRlcm5hbCBibGl0OiAoJ2EsICdiLCAnYykgdCAtPiAoJ2EsICdiLCAnYykgdCAtPiB1bml0XG4gICAgID0gXCJjYW1sX2JhX2JsaXRcIlxuICBleHRlcm5hbCBmaWxsOiAoJ2EsICdiLCAnYykgdCAtPiAnYSAtPiB1bml0ID0gXCJjYW1sX2JhX2ZpbGxcIlxuZW5kXG5cbm1vZHVsZSBBcnJheTAgPSBzdHJ1Y3RcbiAgdHlwZSAoJ2EsICdiLCAnYykgdCA9ICgnYSwgJ2IsICdjKSBHZW5hcnJheS50XG4gIGxldCBjcmVhdGUga2luZCBsYXlvdXQgPVxuICAgIEdlbmFycmF5LmNyZWF0ZSBraW5kIGxheW91dCBbfHxdXG4gIGxldCBnZXQgYXJyID0gR2VuYXJyYXkuZ2V0IGFyciBbfHxdXG4gIGxldCBzZXQgYXJyID0gR2VuYXJyYXkuc2V0IGFyciBbfHxdXG4gIGV4dGVybmFsIGtpbmQ6ICgnYSwgJ2IsICdjKSB0IC0+ICgnYSwgJ2IpIGtpbmQgPSBcImNhbWxfYmFfa2luZFwiXG4gIGV4dGVybmFsIGxheW91dDogKCdhLCAnYiwgJ2MpIHQgLT4gJ2MgbGF5b3V0ID0gXCJjYW1sX2JhX2xheW91dFwiXG5cbiAgZXh0ZXJuYWwgY2hhbmdlX2xheW91dDogKCdhLCAnYiwgJ2MpIHQgLT4gJ2QgbGF5b3V0IC0+ICgnYSwgJ2IsICdkKSB0XG4gICAgPSBcImNhbWxfYmFfY2hhbmdlX2xheW91dFwiXG5cbiAgbGV0IHNpemVfaW5fYnl0ZXMgYXJyID0ga2luZF9zaXplX2luX2J5dGVzIChraW5kIGFycilcblxuICBleHRlcm5hbCBibGl0OiAoJ2EsICdiLCAnYykgdCAtPiAoJ2EsICdiLCAnYykgdCAtPiB1bml0ID0gXCJjYW1sX2JhX2JsaXRcIlxuICBleHRlcm5hbCBmaWxsOiAoJ2EsICdiLCAnYykgdCAtPiAnYSAtPiB1bml0ID0gXCJjYW1sX2JhX2ZpbGxcIlxuXG4gIGxldCBvZl92YWx1ZSBraW5kIGxheW91dCB2ID1cbiAgICBsZXQgYSA9IGNyZWF0ZSBraW5kIGxheW91dCBpblxuICAgIHNldCBhIHY7XG4gICAgYVxuZW5kXG5cbm1vZHVsZSBBcnJheTEgPSBzdHJ1Y3RcbiAgdHlwZSAoJ2EsICdiLCAnYykgdCA9ICgnYSwgJ2IsICdjKSBHZW5hcnJheS50XG4gIGxldCBjcmVhdGUga2luZCBsYXlvdXQgZGltID1cbiAgICBHZW5hcnJheS5jcmVhdGUga2luZCBsYXlvdXQgW3xkaW18XVxuICBleHRlcm5hbCBnZXQ6ICgnYSwgJ2IsICdjKSB0IC0+IGludCAtPiAnYSA9IFwiJWNhbWxfYmFfcmVmXzFcIlxuICBleHRlcm5hbCBzZXQ6ICgnYSwgJ2IsICdjKSB0IC0+IGludCAtPiAnYSAtPiB1bml0ID0gXCIlY2FtbF9iYV9zZXRfMVwiXG4gIGV4dGVybmFsIHVuc2FmZV9nZXQ6ICgnYSwgJ2IsICdjKSB0IC0+IGludCAtPiAnYSA9IFwiJWNhbWxfYmFfdW5zYWZlX3JlZl8xXCJcbiAgZXh0ZXJuYWwgdW5zYWZlX3NldDogKCdhLCAnYiwgJ2MpIHQgLT4gaW50IC0+ICdhIC0+IHVuaXRcbiAgICAgPSBcIiVjYW1sX2JhX3Vuc2FmZV9zZXRfMVwiXG4gIGV4dGVybmFsIGRpbTogKCdhLCAnYiwgJ2MpIHQgLT4gaW50ID0gXCIlY2FtbF9iYV9kaW1fMVwiXG4gIGV4dGVybmFsIGtpbmQ6ICgnYSwgJ2IsICdjKSB0IC0+ICgnYSwgJ2IpIGtpbmQgPSBcImNhbWxfYmFfa2luZFwiXG4gIGV4dGVybmFsIGxheW91dDogKCdhLCAnYiwgJ2MpIHQgLT4gJ2MgbGF5b3V0ID0gXCJjYW1sX2JhX2xheW91dFwiXG5cbiAgZXh0ZXJuYWwgY2hhbmdlX2xheW91dDogKCdhLCAnYiwgJ2MpIHQgLT4gJ2QgbGF5b3V0IC0+ICgnYSwgJ2IsICdkKSB0XG4gICAgPSBcImNhbWxfYmFfY2hhbmdlX2xheW91dFwiXG5cbiAgbGV0IHNpemVfaW5fYnl0ZXMgYXJyID1cbiAgICAoa2luZF9zaXplX2luX2J5dGVzIChraW5kIGFycikpICogKGRpbSBhcnIpXG5cbiAgZXh0ZXJuYWwgc3ViOiAoJ2EsICdiLCAnYykgdCAtPiBpbnQgLT4gaW50IC0+ICgnYSwgJ2IsICdjKSB0ID0gXCJjYW1sX2JhX3N1YlwiXG4gIGxldCBzbGljZSAodHlwZSB0KSAoYSA6IChfLCBfLCB0KSBHZW5hcnJheS50KSBuID1cbiAgICBtYXRjaCBsYXlvdXQgYSB3aXRoXG4gICAgfCBDX2xheW91dCAtPiAoR2VuYXJyYXkuc2xpY2VfbGVmdCBhIFt8bnxdIDogKF8sIF8sIHQpIEdlbmFycmF5LnQpXG4gICAgfCBGb3J0cmFuX2xheW91dCAtPiAoR2VuYXJyYXkuc2xpY2VfcmlnaHQgYSBbfG58XTogKF8sIF8sIHQpIEdlbmFycmF5LnQpXG4gIGV4dGVybmFsIGJsaXQ6ICgnYSwgJ2IsICdjKSB0IC0+ICgnYSwgJ2IsICdjKSB0IC0+IHVuaXQgPSBcImNhbWxfYmFfYmxpdFwiXG4gIGV4dGVybmFsIGZpbGw6ICgnYSwgJ2IsICdjKSB0IC0+ICdhIC0+IHVuaXQgPSBcImNhbWxfYmFfZmlsbFwiXG4gIGxldCBvZl9hcnJheSAodHlwZSB0KSBraW5kIChsYXlvdXQ6IHQgbGF5b3V0KSBkYXRhID1cbiAgICBsZXQgYmEgPSBjcmVhdGUga2luZCBsYXlvdXQgKEFycmF5Lmxlbmd0aCBkYXRhKSBpblxuICAgIGxldCBvZnMgPVxuICAgICAgbWF0Y2ggbGF5b3V0IHdpdGhcbiAgICAgICAgQ19sYXlvdXQgLT4gMFxuICAgICAgfCBGb3J0cmFuX2xheW91dCAtPiAxXG4gICAgaW5cbiAgICBmb3IgaSA9IDAgdG8gQXJyYXkubGVuZ3RoIGRhdGEgLSAxIGRvIHVuc2FmZV9zZXQgYmEgKGkgKyBvZnMpIGRhdGEuKGkpIGRvbmU7XG4gICAgYmFcbmVuZFxuXG5tb2R1bGUgQXJyYXkyID0gc3RydWN0XG4gIHR5cGUgKCdhLCAnYiwgJ2MpIHQgPSAoJ2EsICdiLCAnYykgR2VuYXJyYXkudFxuICBsZXQgY3JlYXRlIGtpbmQgbGF5b3V0IGRpbTEgZGltMiA9XG4gICAgR2VuYXJyYXkuY3JlYXRlIGtpbmQgbGF5b3V0IFt8ZGltMTsgZGltMnxdXG4gIGV4dGVybmFsIGdldDogKCdhLCAnYiwgJ2MpIHQgLT4gaW50IC0+IGludCAtPiAnYSA9IFwiJWNhbWxfYmFfcmVmXzJcIlxuICBleHRlcm5hbCBzZXQ6ICgnYSwgJ2IsICdjKSB0IC0+IGludCAtPiBpbnQgLT4gJ2EgLT4gdW5pdCA9IFwiJWNhbWxfYmFfc2V0XzJcIlxuICBleHRlcm5hbCB1bnNhZmVfZ2V0OiAoJ2EsICdiLCAnYykgdCAtPiBpbnQgLT4gaW50IC0+ICdhXG4gICAgID0gXCIlY2FtbF9iYV91bnNhZmVfcmVmXzJcIlxuICBleHRlcm5hbCB1bnNhZmVfc2V0OiAoJ2EsICdiLCAnYykgdCAtPiBpbnQgLT4gaW50IC0+ICdhIC0+IHVuaXRcbiAgICAgPSBcIiVjYW1sX2JhX3Vuc2FmZV9zZXRfMlwiXG4gIGV4dGVybmFsIGRpbTE6ICgnYSwgJ2IsICdjKSB0IC0+IGludCA9IFwiJWNhbWxfYmFfZGltXzFcIlxuICBleHRlcm5hbCBkaW0yOiAoJ2EsICdiLCAnYykgdCAtPiBpbnQgPSBcIiVjYW1sX2JhX2RpbV8yXCJcbiAgZXh0ZXJuYWwga2luZDogKCdhLCAnYiwgJ2MpIHQgLT4gKCdhLCAnYikga2luZCA9IFwiY2FtbF9iYV9raW5kXCJcbiAgZXh0ZXJuYWwgbGF5b3V0OiAoJ2EsICdiLCAnYykgdCAtPiAnYyBsYXlvdXQgPSBcImNhbWxfYmFfbGF5b3V0XCJcblxuICBleHRlcm5hbCBjaGFuZ2VfbGF5b3V0OiAoJ2EsICdiLCAnYykgdCAtPiAnZCBsYXlvdXQgLT4gKCdhLCAnYiwgJ2QpIHRcbiAgICA9IFwiY2FtbF9iYV9jaGFuZ2VfbGF5b3V0XCJcblxuICBsZXQgc2l6ZV9pbl9ieXRlcyBhcnIgPVxuICAgIChraW5kX3NpemVfaW5fYnl0ZXMgKGtpbmQgYXJyKSkgKiAoZGltMSBhcnIpICogKGRpbTIgYXJyKVxuXG4gIGV4dGVybmFsIHN1Yl9sZWZ0OiAoJ2EsICdiLCBjX2xheW91dCkgdCAtPiBpbnQgLT4gaW50IC0+ICgnYSwgJ2IsIGNfbGF5b3V0KSB0XG4gICAgID0gXCJjYW1sX2JhX3N1YlwiXG4gIGV4dGVybmFsIHN1Yl9yaWdodDpcbiAgICAoJ2EsICdiLCBmb3J0cmFuX2xheW91dCkgdCAtPiBpbnQgLT4gaW50IC0+ICgnYSwgJ2IsIGZvcnRyYW5fbGF5b3V0KSB0XG4gICAgID0gXCJjYW1sX2JhX3N1YlwiXG4gIGxldCBzbGljZV9sZWZ0IGEgbiA9IEdlbmFycmF5LnNsaWNlX2xlZnQgYSBbfG58XVxuICBsZXQgc2xpY2VfcmlnaHQgYSBuID0gR2VuYXJyYXkuc2xpY2VfcmlnaHQgYSBbfG58XVxuICBleHRlcm5hbCBibGl0OiAoJ2EsICdiLCAnYykgdCAtPiAoJ2EsICdiLCAnYykgdCAtPiB1bml0ID0gXCJjYW1sX2JhX2JsaXRcIlxuICBleHRlcm5hbCBmaWxsOiAoJ2EsICdiLCAnYykgdCAtPiAnYSAtPiB1bml0ID0gXCJjYW1sX2JhX2ZpbGxcIlxuICBsZXQgb2ZfYXJyYXkgKHR5cGUgdCkga2luZCAobGF5b3V0OiB0IGxheW91dCkgZGF0YSA9XG4gICAgbGV0IGRpbTEgPSBBcnJheS5sZW5ndGggZGF0YSBpblxuICAgIGxldCBkaW0yID0gaWYgZGltMSA9IDAgdGhlbiAwIGVsc2UgQXJyYXkubGVuZ3RoIGRhdGEuKDApIGluXG4gICAgbGV0IGJhID0gY3JlYXRlIGtpbmQgbGF5b3V0IGRpbTEgZGltMiBpblxuICAgIGxldCBvZnMgPVxuICAgICAgbWF0Y2ggbGF5b3V0IHdpdGhcbiAgICAgICAgQ19sYXlvdXQgLT4gMFxuICAgICAgfCBGb3J0cmFuX2xheW91dCAtPiAxXG4gICAgaW5cbiAgICBmb3IgaSA9IDAgdG8gZGltMSAtIDEgZG9cbiAgICAgIGxldCByb3cgPSBkYXRhLihpKSBpblxuICAgICAgaWYgQXJyYXkubGVuZ3RoIHJvdyA8PiBkaW0yIHRoZW5cbiAgICAgICAgaW52YWxpZF9hcmcoXCJCaWdhcnJheS5BcnJheTIub2ZfYXJyYXk6IG5vbi1yZWN0YW5ndWxhciBkYXRhXCIpO1xuICAgICAgZm9yIGogPSAwIHRvIGRpbTIgLSAxIGRvXG4gICAgICAgIHVuc2FmZV9zZXQgYmEgKGkgKyBvZnMpIChqICsgb2ZzKSByb3cuKGopXG4gICAgICBkb25lXG4gICAgZG9uZTtcbiAgICBiYVxuZW5kXG5cbm1vZHVsZSBBcnJheTMgPSBzdHJ1Y3RcbiAgdHlwZSAoJ2EsICdiLCAnYykgdCA9ICgnYSwgJ2IsICdjKSBHZW5hcnJheS50XG4gIGxldCBjcmVhdGUga2luZCBsYXlvdXQgZGltMSBkaW0yIGRpbTMgPVxuICAgIEdlbmFycmF5LmNyZWF0ZSBraW5kIGxheW91dCBbfGRpbTE7IGRpbTI7IGRpbTN8XVxuICBleHRlcm5hbCBnZXQ6ICgnYSwgJ2IsICdjKSB0IC0+IGludCAtPiBpbnQgLT4gaW50IC0+ICdhID0gXCIlY2FtbF9iYV9yZWZfM1wiXG4gIGV4dGVybmFsIHNldDogKCdhLCAnYiwgJ2MpIHQgLT4gaW50IC0+IGludCAtPiBpbnQgLT4gJ2EgLT4gdW5pdFxuICAgICA9IFwiJWNhbWxfYmFfc2V0XzNcIlxuICBleHRlcm5hbCB1bnNhZmVfZ2V0OiAoJ2EsICdiLCAnYykgdCAtPiBpbnQgLT4gaW50IC0+IGludCAtPiAnYVxuICAgICA9IFwiJWNhbWxfYmFfdW5zYWZlX3JlZl8zXCJcbiAgZXh0ZXJuYWwgdW5zYWZlX3NldDogKCdhLCAnYiwgJ2MpIHQgLT4gaW50IC0+IGludCAtPiBpbnQgLT4gJ2EgLT4gdW5pdFxuICAgICA9IFwiJWNhbWxfYmFfdW5zYWZlX3NldF8zXCJcbiAgZXh0ZXJuYWwgZGltMTogKCdhLCAnYiwgJ2MpIHQgLT4gaW50ID0gXCIlY2FtbF9iYV9kaW1fMVwiXG4gIGV4dGVybmFsIGRpbTI6ICgnYSwgJ2IsICdjKSB0IC0+IGludCA9IFwiJWNhbWxfYmFfZGltXzJcIlxuICBleHRlcm5hbCBkaW0zOiAoJ2EsICdiLCAnYykgdCAtPiBpbnQgPSBcIiVjYW1sX2JhX2RpbV8zXCJcbiAgZXh0ZXJuYWwga2luZDogKCdhLCAnYiwgJ2MpIHQgLT4gKCdhLCAnYikga2luZCA9IFwiY2FtbF9iYV9raW5kXCJcbiAgZXh0ZXJuYWwgbGF5b3V0OiAoJ2EsICdiLCAnYykgdCAtPiAnYyBsYXlvdXQgPSBcImNhbWxfYmFfbGF5b3V0XCJcblxuICBleHRlcm5hbCBjaGFuZ2VfbGF5b3V0OiAoJ2EsICdiLCAnYykgdCAtPiAnZCBsYXlvdXQgLT4gKCdhLCAnYiwgJ2QpIHRcbiAgICA9IFwiY2FtbF9iYV9jaGFuZ2VfbGF5b3V0XCJcblxuICBsZXQgc2l6ZV9pbl9ieXRlcyBhcnIgPVxuICAgIChraW5kX3NpemVfaW5fYnl0ZXMgKGtpbmQgYXJyKSkgKiAoZGltMSBhcnIpICogKGRpbTIgYXJyKSAqIChkaW0zIGFycilcblxuICBleHRlcm5hbCBzdWJfbGVmdDogKCdhLCAnYiwgY19sYXlvdXQpIHQgLT4gaW50IC0+IGludCAtPiAoJ2EsICdiLCBjX2xheW91dCkgdFxuICAgICA9IFwiY2FtbF9iYV9zdWJcIlxuICBleHRlcm5hbCBzdWJfcmlnaHQ6XG4gICAgICgnYSwgJ2IsIGZvcnRyYW5fbGF5b3V0KSB0IC0+IGludCAtPiBpbnQgLT4gKCdhLCAnYiwgZm9ydHJhbl9sYXlvdXQpIHRcbiAgICAgPSBcImNhbWxfYmFfc3ViXCJcbiAgbGV0IHNsaWNlX2xlZnRfMSBhIG4gbSA9IEdlbmFycmF5LnNsaWNlX2xlZnQgYSBbfG47IG18XVxuICBsZXQgc2xpY2VfcmlnaHRfMSBhIG4gbSA9IEdlbmFycmF5LnNsaWNlX3JpZ2h0IGEgW3xuOyBtfF1cbiAgbGV0IHNsaWNlX2xlZnRfMiBhIG4gPSBHZW5hcnJheS5zbGljZV9sZWZ0IGEgW3xufF1cbiAgbGV0IHNsaWNlX3JpZ2h0XzIgYSBuID0gR2VuYXJyYXkuc2xpY2VfcmlnaHQgYSBbfG58XVxuICBleHRlcm5hbCBibGl0OiAoJ2EsICdiLCAnYykgdCAtPiAoJ2EsICdiLCAnYykgdCAtPiB1bml0ID0gXCJjYW1sX2JhX2JsaXRcIlxuICBleHRlcm5hbCBmaWxsOiAoJ2EsICdiLCAnYykgdCAtPiAnYSAtPiB1bml0ID0gXCJjYW1sX2JhX2ZpbGxcIlxuICBsZXQgb2ZfYXJyYXkgKHR5cGUgdCkga2luZCAobGF5b3V0OiB0IGxheW91dCkgZGF0YSA9XG4gICAgbGV0IGRpbTEgPSBBcnJheS5sZW5ndGggZGF0YSBpblxuICAgIGxldCBkaW0yID0gaWYgZGltMSA9IDAgdGhlbiAwIGVsc2UgQXJyYXkubGVuZ3RoIGRhdGEuKDApIGluXG4gICAgbGV0IGRpbTMgPSBpZiBkaW0yID0gMCB0aGVuIDAgZWxzZSBBcnJheS5sZW5ndGggZGF0YS4oMCkuKDApIGluXG4gICAgbGV0IGJhID0gY3JlYXRlIGtpbmQgbGF5b3V0IGRpbTEgZGltMiBkaW0zIGluXG4gICAgbGV0IG9mcyA9XG4gICAgICBtYXRjaCBsYXlvdXQgd2l0aFxuICAgICAgICBDX2xheW91dCAtPiAwXG4gICAgICB8IEZvcnRyYW5fbGF5b3V0IC0+IDFcbiAgICBpblxuICAgIGZvciBpID0gMCB0byBkaW0xIC0gMSBkb1xuICAgICAgbGV0IHJvdyA9IGRhdGEuKGkpIGluXG4gICAgICBpZiBBcnJheS5sZW5ndGggcm93IDw+IGRpbTIgdGhlblxuICAgICAgICBpbnZhbGlkX2FyZyhcIkJpZ2FycmF5LkFycmF5My5vZl9hcnJheTogbm9uLWN1YmljIGRhdGFcIik7XG4gICAgICBmb3IgaiA9IDAgdG8gZGltMiAtIDEgZG9cbiAgICAgICAgbGV0IGNvbCA9IHJvdy4oaikgaW5cbiAgICAgICAgaWYgQXJyYXkubGVuZ3RoIGNvbCA8PiBkaW0zIHRoZW5cbiAgICAgICAgICBpbnZhbGlkX2FyZyhcIkJpZ2FycmF5LkFycmF5My5vZl9hcnJheTogbm9uLWN1YmljIGRhdGFcIik7XG4gICAgICAgIGZvciBrID0gMCB0byBkaW0zIC0gMSBkb1xuICAgICAgICAgIHVuc2FmZV9zZXQgYmEgKGkgKyBvZnMpIChqICsgb2ZzKSAoayArIG9mcykgY29sLihrKVxuICAgICAgICBkb25lXG4gICAgICBkb25lXG4gICAgZG9uZTtcbiAgICBiYVxuZW5kXG5cbmV4dGVybmFsIGdlbmFycmF5X29mX2FycmF5MDogKCdhLCAnYiwgJ2MpIEFycmF5MC50IC0+ICgnYSwgJ2IsICdjKSBHZW5hcnJheS50XG4gICA9IFwiJWlkZW50aXR5XCJcbmV4dGVybmFsIGdlbmFycmF5X29mX2FycmF5MTogKCdhLCAnYiwgJ2MpIEFycmF5MS50IC0+ICgnYSwgJ2IsICdjKSBHZW5hcnJheS50XG4gICA9IFwiJWlkZW50aXR5XCJcbmV4dGVybmFsIGdlbmFycmF5X29mX2FycmF5MjogKCdhLCAnYiwgJ2MpIEFycmF5Mi50IC0+ICgnYSwgJ2IsICdjKSBHZW5hcnJheS50XG4gICA9IFwiJWlkZW50aXR5XCJcbmV4dGVybmFsIGdlbmFycmF5X29mX2FycmF5MzogKCdhLCAnYiwgJ2MpIEFycmF5My50IC0+ICgnYSwgJ2IsICdjKSBHZW5hcnJheS50XG4gICA9IFwiJWlkZW50aXR5XCJcbmxldCBhcnJheTBfb2ZfZ2VuYXJyYXkgYSA9XG4gIGlmIEdlbmFycmF5Lm51bV9kaW1zIGEgPSAwIHRoZW4gYVxuICBlbHNlIGludmFsaWRfYXJnIFwiQmlnYXJyYXkuYXJyYXkwX29mX2dlbmFycmF5XCJcbmxldCBhcnJheTFfb2ZfZ2VuYXJyYXkgYSA9XG4gIGlmIEdlbmFycmF5Lm51bV9kaW1zIGEgPSAxIHRoZW4gYVxuICBlbHNlIGludmFsaWRfYXJnIFwiQmlnYXJyYXkuYXJyYXkxX29mX2dlbmFycmF5XCJcbmxldCBhcnJheTJfb2ZfZ2VuYXJyYXkgYSA9XG4gIGlmIEdlbmFycmF5Lm51bV9kaW1zIGEgPSAyIHRoZW4gYVxuICBlbHNlIGludmFsaWRfYXJnIFwiQmlnYXJyYXkuYXJyYXkyX29mX2dlbmFycmF5XCJcbmxldCBhcnJheTNfb2ZfZ2VuYXJyYXkgYSA9XG4gIGlmIEdlbmFycmF5Lm51bV9kaW1zIGEgPSAzIHRoZW4gYVxuICBlbHNlIGludmFsaWRfYXJnIFwiQmlnYXJyYXkuYXJyYXkzX29mX2dlbmFycmF5XCJcblxuZXh0ZXJuYWwgcmVzaGFwZTpcbiAgICgnYSwgJ2IsICdjKSBHZW5hcnJheS50IC0+IGludCBhcnJheSAtPiAoJ2EsICdiLCAnYykgR2VuYXJyYXkudFxuICAgPSBcImNhbWxfYmFfcmVzaGFwZVwiXG5sZXQgcmVzaGFwZV8wIGEgPSByZXNoYXBlIGEgW3x8XVxubGV0IHJlc2hhcGVfMSBhIGRpbTEgPSByZXNoYXBlIGEgW3xkaW0xfF1cbmxldCByZXNoYXBlXzIgYSBkaW0xIGRpbTIgPSByZXNoYXBlIGEgW3xkaW0xO2RpbTJ8XVxubGV0IHJlc2hhcGVfMyBhIGRpbTEgZGltMiBkaW0zID0gcmVzaGFwZSBhIFt8ZGltMTtkaW0yO2RpbTN8XVxuXG4oKiBGb3JjZSBjYW1sX2JhX2dldF97MSwyLDMsTn0gdG8gYmUgbGlua2VkIGluLCBzaW5jZSB3ZSBkb24ndCByZWZlclxuICAgdG8gdGhvc2UgcHJpbWl0aXZlcyBkaXJlY3RseSBpbiB0aGlzIGZpbGUgKilcblxubGV0IF8gPVxuICBsZXQgXyA9IEdlbmFycmF5LmdldCBpblxuICBsZXQgXyA9IEFycmF5MS5nZXQgaW5cbiAgbGV0IF8gPSBBcnJheTIuZ2V0IGluXG4gIGxldCBfID0gQXJyYXkzLmdldCBpblxuICAoKVxuXG5bQEBAb2NhbWwud2FybmluZyBcIi0zMlwiXVxuZXh0ZXJuYWwgZ2V0MTogdW5pdCAtPiB1bml0ID0gXCJjYW1sX2JhX2dldF8xXCJcbmV4dGVybmFsIGdldDI6IHVuaXQgLT4gdW5pdCA9IFwiY2FtbF9iYV9nZXRfMlwiXG5leHRlcm5hbCBnZXQzOiB1bml0IC0+IHVuaXQgPSBcImNhbWxfYmFfZ2V0XzNcIlxuZXh0ZXJuYWwgc2V0MTogdW5pdCAtPiB1bml0ID0gXCJjYW1sX2JhX3NldF8xXCJcbmV4dGVybmFsIHNldDI6IHVuaXQgLT4gdW5pdCA9IFwiY2FtbF9iYV9zZXRfMlwiXG5leHRlcm5hbCBzZXQzOiB1bml0IC0+IHVuaXQgPSBcImNhbWxfYmFfc2V0XzNcIlxuIl19
