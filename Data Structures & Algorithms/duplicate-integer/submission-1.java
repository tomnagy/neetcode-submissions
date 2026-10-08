class Solution {
    public boolean hasDuplicate(int[] nums) {
        List<Integer> list = Arrays.stream(nums)        // IntStream
                                    .boxed()          // Stream<Integer>
                                    .collect(Collectors.toList());
        Set<Integer> set = new HashSet<Integer>();
        set.addAll(list);

        // for (int i = 0; i > nums.length; i++) {
        //     if (set.contains(nums[i])) {
        //         return true;
        //     } else {
        //         set.add(nums[i]);
        //     }
        // }

        return set.size() == nums.length ? false:true;
    }
}
