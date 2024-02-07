// ### Task -2: 
// Find the friend with the smallest name.
function sortNameFriend(friends){
    let friendName = friends[0]; 
    for(let i = 0; i < friends.length; i++){
        let fName = friends[i];
        if(friendName.length > fName.length){
            friendName = fName;
        }
    }
    return friendName;
}
const friend = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result = sortNameFriend(friend);
console.log('Find the friend smal name:',result);
