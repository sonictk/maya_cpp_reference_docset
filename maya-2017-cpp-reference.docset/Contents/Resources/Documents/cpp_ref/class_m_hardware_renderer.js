var class_m_hardware_renderer =
[
    [ "DrawProcedureStatusCode", "class_m_hardware_renderer.html#a14dafbca9ec0aa5132598b888511bfcb", [
      [ "kSuccess", "class_m_hardware_renderer.html#a14dafbca9ec0aa5132598b888511bfcbaf0536797208144380691e2b376ffc1d1", null ],
      [ "kFailure", "class_m_hardware_renderer.html#a14dafbca9ec0aa5132598b888511bfcba1ef6c2d725fb4bec3e7e840d28adbc00", null ],
      [ "kItemExists", "class_m_hardware_renderer.html#a14dafbca9ec0aa5132598b888511bfcba7823f63b4ae266c9228d1500c092bc5b", null ],
      [ "kItemNotFound", "class_m_hardware_renderer.html#a14dafbca9ec0aa5132598b888511bfcba77eab2acb2adbeedf84913f2710415fa", null ],
      [ "kLocationNotFound", "class_m_hardware_renderer.html#a14dafbca9ec0aa5132598b888511bfcba49d8dfecd6243dbdef99a52a37391060", null ]
    ] ],
    [ "BufferPixelFormat", "class_m_hardware_renderer.html#a9e9dd2b7e61c97fa71a280792980f7da", [
      [ "kRGBA_Fix8", "class_m_hardware_renderer.html#a9e9dd2b7e61c97fa71a280792980f7daa3f2006edd7ae9e9783a9e850c2ef2963", null ],
      [ "kRGBA_Float16", "class_m_hardware_renderer.html#a9e9dd2b7e61c97fa71a280792980f7daad2a6f3e6707b26d54e5bf286461a4bd5", null ],
      [ "kDepth_Float32", "class_m_hardware_renderer.html#a9e9dd2b7e61c97fa71a280792980f7daa52cb1c770ac21ced7dddffe18b5f3a36", null ]
    ] ],
    [ "CallLocation", "class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986", [
      [ "kPreRendering", "class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986aef844aa5884692f98da12f4b6498b98f", null ],
      [ "kPreExposure", "class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986a6742f06270edc03dc6e4fab458575a65", null ],
      [ "kPostExposure", "class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986aa719507f97eea20e5fce2da8660fdeac", null ],
      [ "kPostRendering", "class_m_hardware_renderer.html#a0526f0a40dc8240e14bfb22ebf93d986a40faa5492f345487e604f7fd7196f019", null ]
    ] ],
    [ "GeometricShape", "class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505", [
      [ "kDefaultSphere", "class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505acb4a5f68a3b6cd8c05b1dc9c5a487c88", null ],
      [ "kDefaultPlane", "class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505a184eac47c82e5c13dd2dd52420cbf89f", null ],
      [ "kDefaultCube", "class_m_hardware_renderer.html#a5f45789e2294fc128af5b04595d96505a86db3fcd02f093aba91aa87457074701", null ]
    ] ],
    [ "backEndString", "class_m_hardware_renderer.html#afd786038730d9c301a6b3a489d22d816", null ],
    [ "addDrawProcedure", "class_m_hardware_renderer.html#a4c9bd2dbcef10b245426c34053f7b39e", null ],
    [ "removeDrawProcedure", "class_m_hardware_renderer.html#a031ed57acc6c5925a174c82e9346f9be", null ],
    [ "insertDrawProcedure", "class_m_hardware_renderer.html#aefdbac8a0a098274b95068ba832ea5a4", null ],
    [ "getDrawProcedureCount", "class_m_hardware_renderer.html#a89e10a08f9a069ce72bd37f5c237bbfc", null ],
    [ "getDrawProcedureListNames", "class_m_hardware_renderer.html#ab47e046afeb876ea3796aeb676744472", null ],
    [ "findDrawProcedure", "class_m_hardware_renderer.html#adcdd01c00115104687d88fc24434c5ea", null ],
    [ "makeResourceContextCurrent", "class_m_hardware_renderer.html#afa4f9cf4ae2429c6999089ebaaba38e1", null ],
    [ "getBufferSize", "class_m_hardware_renderer.html#a6d61f7d5ea7404383040833309959bc2", null ],
    [ "getColorBufferPixelFormat", "class_m_hardware_renderer.html#a37d7ea9beab0d96a6305c8e39f829707", null ],
    [ "getDepthBufferPixelFormat", "class_m_hardware_renderer.html#a4c8bf99bcb6fd5a1fa04b92f801427fe", null ],
    [ "getCurrentExposureNumber", "class_m_hardware_renderer.html#a7c19b7916a9d03278e4e7916f714e0aa", null ],
    [ "getTotalExposureCount", "class_m_hardware_renderer.html#a6e81e2348f06ffbef802813f87b411c3", null ],
    [ "restoreCurrent", "class_m_hardware_renderer.html#aed2ae9dd5fd50debaca541134f1a1dd8", null ],
    [ "makeSwatchContextCurrent", "class_m_hardware_renderer.html#a4d85f022b09d72ce1f6a17ad4fa41be4", null ],
    [ "readSwatchContextPixels", "class_m_hardware_renderer.html#ae2bc38072d14c1b8e1988e1f2ae73066", null ],
    [ "referenceDefaultGeometry", "class_m_hardware_renderer.html#afb2b5a9604dd4332eab2b9be053b446e", null ],
    [ "dereferenceGeometry", "class_m_hardware_renderer.html#a7038dec27e316897f0daf376faefc2c1", null ],
    [ "getSwatchOrthoCameraSetting", "class_m_hardware_renderer.html#a1c5dbf2c0a0fc8433f48744a92507116", null ],
    [ "getSwatchPerspectiveCameraSetting", "class_m_hardware_renderer.html#a14d1484740450d30fa540baf31f47a09", null ],
    [ "getSwatchPerspectiveCameraTranslation", "class_m_hardware_renderer.html#a9d90b7747c53a7cc49ec2c9cd543fb6e", null ],
    [ "getSwatchLightDirection", "class_m_hardware_renderer.html#a4fa0ae8729daf1a0125906fad0fc1704", null ],
    [ "drawSwatchBackGroundQuads", "class_m_hardware_renderer.html#a4fd995524f4d62ca22bee3f1b1249941", null ],
    [ "glFunctionTable", "class_m_hardware_renderer.html#ae661000714d15915ccc58949842f4c57", null ]
];