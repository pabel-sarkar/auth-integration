/**
 * // 1.creat a context. so that can share the state of User across the application.
 * // 2. Creat a provider to re-use the context
 * 
 * // 3. set CreateUser via context provided function
 * // 4.login user via context provided function
 * 
//  * 5.observe one single place (inside the provider) ==> if the user stste on firebase change you can
//      update the information in your state

//  6.use observer inside useEffect ==>
    //6.1 ==> set the observer one time
    //6.2==> clean up memory after unmount
 * 
 */