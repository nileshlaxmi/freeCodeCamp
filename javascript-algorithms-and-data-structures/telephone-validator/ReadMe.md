# **Build a Telephone Number Validator**

In the US, phone numbers can be formatted in many ways. Here are some examples of valid formats for US phone numbers:

> 1 555-555-5555
> 1 (555) 555-5555
> 1(555)555-5555
> 1 555 555 5555
> 5555555555
> 555-555-5555
> (555)555-5555

Note that the area code is required. Also, if the country code is provided, you must confirm that the country code is `1`.

**Objective:** Build an app that is functionally similar to [<u>https://telephone-number-validator.freecodecamp.rocks</u>](https://telephone-number-validator.freecodecamp.rocks).

**User Stories:**

 1. You should have an `input` element with an `id` of `"user-input"`.
 2. You should have a `button` element with an `id` of `"check-btn"`.
 3. You should have a `button` element with an `id` of `"clear-btn"`.
 4. You should have a `div`, `span` or `p` element with an `id` of `"results-div"`.
 5. When you click on the `#check-btn` element without entering a value into the `#user-input` element, an alert should appear with the text `"Please provide a phone number"`.
 6. When you click on the `#clear-btn` element, the content within the `#results-div` element should be removed.
 7. When the `#user-input` element contains `1 555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 555-555-5555"`.
 8. When the `#user-input` element contains `1 (555) 555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 (555) 555-5555"`.
 9. When the `#user-input` element contains `5555555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 5555555555"`.
10. When the `#user-input` element contains `555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 555-555-5555"`.
11. When the `#user-input` element contains `(555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: (555)555-5555"`.
12. When the `#user-input` element contains `1(555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1(555)555-5555"`.
13. When the `#user-input` element contains `555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 555-5555"`.
14. When the `#user-input` element contains `5555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 5555555"`.
15. When the `#user-input` element contains `1 555)555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 1 555)555-5555"`.
16. When the `#user-input` element contains `1 555 555 5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 555 555 5555"`.
17. When the `#user-input` element contains `1 456 789 4444` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: 1 456 789 4444"`.
18. When `#user-input` contains `123**&!!asdf#` and `#check-btn` is clicked, `#results-div` should contain the text `"Invalid US number: 123**&!!asdf#"`.
19. When the `#user-input` element contains `55555555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 55555555"`.
20. When the `#user-input` element contains `(6054756961)` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (6054756961)"`.
21. When the `#user-input` element contains `2 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2 (757) 622-7382"`.
22. When the `#user-input` element contains `0 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 0 (757) 622-7382"`.
23. When the `#user-input` element contains `-1 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: -1 (757) 622-7382"`.
24. When the `#user-input` element contains `2 757 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2 757 622-7382"`.
25. When the `#user-input` element contains `10 (757) 622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 10 (757) 622-7382"`.
26. When the `#user-input` element contains `27576227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 27576227382"`.
27. When the `#user-input` element contains `(275)76227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (275)76227382"`.
28. When the `#user-input` element contains `2(757)6227382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2(757)6227382"`.
29. When the `#user-input` element contains `2(757)622-7382` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 2(757)622-7382"`.
30. When the `#user-input` element contains `555)-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 555)-555-5555"`.
31. When the `#user-input` element contains `(555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: (555-555-5555"`.
32. When `#user-input` contains `(555)5(55?)-5555` and `#check-btn` is clicked, `#results-div` should contain the text `"Invalid US number: (555)5(55?)-5555"`.
33. When the `#user-input` element contains `55 55-55-555-5` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 55 55-55-555-5"`.
34. When the `#user-input` element contains `11 555-555-5555` and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: 11 555-555-5555"`.
35. When the `#user-input` element contains a valid US number and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Valid US number: "` followed by the number.
36. When the `#user-input` element contains an invalid US number and the `#check-btn` element is clicked, the `#results-div` element should contain the text `"Invalid US number: "` followed by the number.