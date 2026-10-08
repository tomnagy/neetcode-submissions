class Solution {
    public boolean isAnagram(String s, String t) {
        List<String> sList = new ArrayList<String>(Arrays.asList(s.split("")));
        List<String> tList = new ArrayList<String>(Arrays.asList(t.split("")));
        if (sList.size() != tList.size())
            return false;

        System.out.println(sList);
        System.out.println(tList);
        boolean sameSize = sList.size() == tList.size();
        System.out.println(sameSize);
        
        for(String c: tList) {
            if (!sList.remove(c))
                return false;
        }
        System.out.println(sList.isEmpty());
        System.out.println(sameSize && sList.isEmpty());

        return true;
    }
}
