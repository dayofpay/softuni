function calc(nums) {
    while (nums.length > 1) {
        for (let i = 0; i < nums.length - 1; i++) {
            nums[i] = nums[i] + nums[i + 1];
        }
        nums.pop();
    }
   console.log(nums[0]);
}

calc([5,0,4,1,2]);