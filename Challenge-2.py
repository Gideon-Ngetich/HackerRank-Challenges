# Task
# Given an integer, , perform the following conditional actions:

# If n  is odd, print Weird
# If n is even and in the inclusive range of  to , print Not Weird
# If n is even and in the inclusive range of  to , print Weird
# If n is even and greater than , print Not Weird
# Input Format

# A single line containing a positive integer, .

# Constraints

# Output Format

# Print Weird if the number is weird. Otherwise, print Not Weird.

#Solution


#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    
    is_odd = n % 2
    condition_2 = not(n % 2)and n in range (2,6)
    condition_3 = not(n % 2) and n in range (6,21)
    condition_4 = not(n % 2) and n > 20
    
    if is_odd or condition_3:
        print("Weird")
    elif condition_2 or condition_4:
        print("Not Weir")