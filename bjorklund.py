#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Mar 29 17:19:42 2024

@author: simonsprouse
"""

import numpy as np

def bjorklund(pulses, steps):
    
    arr = np.arange(-1, steps, 1)
    print(arr)
    
    arr *= pulses
    
    print(arr)
    
    arr %= steps
    
    print(arr)
    
    print((np.diff(arr) < 0).astype(int))
    
    
    
    
bjorklund(5, 13)