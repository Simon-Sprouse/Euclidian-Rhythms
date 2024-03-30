#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Mar 29 17:19:42 2024

@author: simonsprouse
"""

import numpy as np

def bjorklund(pulses, steps):
    
    start = -1
    
    arr = np.arange(start, steps + (1 + start), 1)
    print(arr)
    
    arr *= pulses
    print(arr)
    
    arr %= steps
    print(arr)
    
    diff = np.diff(arr)
    print(diff)
    
    result = (diff < 0).astype(int)
    print(result)
    
    return result
    
    
bjorklund(3, 8)