# Idea
Use worker thread to speed up CPU intensive performance. 

# Analogy of multi threaded
Imagine you're at a library, and you have a stack of books you need to read and return. You are the only person responsible for both reading and returning these books, and you can only focus on one book at a time. This scenario represents single-threaded processing.

Now, consider a different situation where you have the same stack of books, but you have a friend who can help you. You decide to split the task between the two of you: you read the books, and your friend returns them. While you are reading one book, your friend can simultaneously return another one. This is similar to multi-threaded processing.

In the single-threaded scenario, you can only perform one task at a time, just like you can only read or return books individually. It may take you a long time to complete all the tasks since you're doing them one after the other.

In the multi-threaded scenario, both you and your friend work concurrently on different aspects of the task. This approach can significantly speed up the completion of the entire stack of books because you are utilizing multiple threads (you and your friend) to work in parallel.

In computing, single-threaded programs execute one instruction at a time, while multi-threaded programs can execute multiple instructions simultaneously, which can lead to faster and more efficient processing.

JavaScript is a single-threaded language, meaning that only one line of code can be executed at a time. This is because the JavaScript interpreter in the browser is single-threaded, and allowing multiple threads would cause concurrency issues in existing web pages[1]. However, there are ways to achieve some form of concurrency and simulate multi-threading in JavaScript.

# Goals
Run third party scripts such as Google Tag Manager (GTM), Google Analytics (GA), Facebook Pixel, Mixpanel in a worker thread.
https://partytown.builder.io/
https://partytown.builder.io/trade-offs#intercepted-network-requests

# Websites that are using Partytown
https://idx.dev/
