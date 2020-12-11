#!/usr/bin/python

def calculateSeatData(inputString):
    # currentMax = maxValue
    # currentMin = 0
    # currentRange = currentMax - currentMin
    print(inputString)
    # for i in (0, len(inputString)):
    #     print(inputString.index(i))


fo = open('../data/day11.txt', 'r')
print('somestufff', fo.name)
# fo.read()
# print(fo.read(-1))
for line in fo:
    calculateSeatData(line)
