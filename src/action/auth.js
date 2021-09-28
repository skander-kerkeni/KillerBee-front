import router from '@/router';

export const logOut = () => {
    window.localStorage.removeItem("user-token");
    console.log("TEST!");
    // Vue.$toast.open({
    //   message: 'Vous avez été deconnecté.',
    //   type: 'success',
    //   position: 'top-right'
    // });
    router.push({ name: 'login' });

}