// Created by: Jaejun Lee
// Created on: June 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-EXTRA/sw.js", {
    scope: "/ICS2O-Unit6-04-EXTRA/",
  })
}

/**
 * This function calculates the area for a rectangle
 */
window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  // input and process
  const length = params.get('l')
  const width = params.get('w')
  const area = length * width
  const dimensions = "<ul>\n<li>Length = " + length + "</li>\n<li>Width = " + width + "</li>\n</ul>"

  // output
  if ((length < 0) || (width < 0)) {
    document.getElementById('area').innerHTML = 'Area is 0.'
  } else {
    document.getElementById('dimensions').innerHTML = dimensions
    document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
  }
}