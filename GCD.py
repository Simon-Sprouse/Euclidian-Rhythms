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

print("hello world")

A = 1008
B = 20

print(gcd(A, B))

