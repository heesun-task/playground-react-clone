import React, { useState } from 'react'

export const useEffect = (callback : () => void, deps: any[]) => {
  console.log(callback,deps)
  return ('t')
}