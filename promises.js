const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`cold drinks`);
    }, 2000);
});

const perMovieWithPromises = () => {
    console.log('person1: shows ticket');
    console.log('person2: shows ticket');

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    return promiseWifeBringingTicks
        .then((ticket) => {
            console.log(`wife: i have the ${ticket}`);
            console.log('husband: we should go in');
            console.log('wife: no, I am hungry');
            return getPopcorn;
        })
        .then((popcorn) => {
            console.log(`husband: i got some ${popcorn}`);
            console.log('husband: we should go in');
            console.log('wife: I need some butter on my popcorn');
            return addButter;
        })
        .then((butter) => {
            console.log(`husband: i got some ${butter} on popcorn`);
            console.log(`husband: anything else love?`);
            console.log(`wife: let's go in; we are getting late`);
            console.log(`husband: thank you for the reminder *grins*`);
            return butter;
        });
};

const perMovieWithAsyncAwait = async () => {
    console.log('person1: shows ticket');
    console.log('person2: shows ticket');

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    let ticket = await promiseWifeBringingTicks;
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no, I am hungry');

    let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need some butter on my popcorn');

    let butter = await addButter;
    console.log(`husband: i got some ${butter} on popcorn`);
    console.log(`husband: anything else love?`);
    console.log(`wife: let's go in; we are getting late`);
    console.log(`husband: thank you for the reminder *grins*`);

    const coldDrinks = await getColdDrinks;
    return coldDrinks;
};

Promise.all([perMovieWithPromises(), perMovieWithAsyncAwait()]).then((results) => {
    console.log(`person3: shows ${results[0]}`);
    console.log('person4: shows ticket');
    console.log('person5: shows ticket');
});

