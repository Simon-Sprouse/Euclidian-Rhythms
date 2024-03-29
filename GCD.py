#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Mar 29 16:57:20 2024

@author: simonsprouse
"""

def gcd(m, k):
    if k == 0:
        return m
    else: 
        return gcd(k, m % k)
    
    
def gcd2(m, k):
    while k != 0:
        print("{} = {} * {} + {}".format(m, k, m // k, m % k))
        m, k = k, m % k
    return m


A = 13
B = 5

# print(gcd(A, B))
print(gcd2(A, B))
