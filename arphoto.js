// This is a test
console.log("hello world");
var parameters = {
  // size of the marker in meter
  size: 1,
  // type of marker - ['pattern', 'barcode', 'unknown' ]
  type: "unknown",
  // url of the pattern - IIF type='pattern'
  patternUrl: null,
  // value of the barcode - IIF type='barcode'
  barcodeValue: null,
  // change matrix mode - [modelViewMatrix, cameraTransformMatrix]
  changeMatrixMode: "modelViewMatrix",
  // turn on/off camera smoothing
  smooth: true,
  // number of matrices to smooth tracking over, more = smoother but slower follow
  smoothCount: 5,
  // distance tolerance for smoothing, if smoothThreshold # of matrices are under tolerance, tracking will stay still
  smoothTolerance: 0.01,
  // threshold for smoothing, will keep still unless enough matrices are over tolerance
  smoothThreshold: 2
};
