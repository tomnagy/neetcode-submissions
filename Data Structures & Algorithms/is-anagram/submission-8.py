class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        sDict = {}
        tDict = {}

        for i in range(len(s)):
            sDict.update({s[i]: sDict.get(s[i], 0) + 1})
        
        for i in range(len(t)):
            tDict.update({t[i]: tDict.get(t[i], 0) + 1})
            
        return sDict == tDict