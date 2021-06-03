import react, {useEffect} from 'react';
function User({user, onRemove, onToggle}){

    //콜백함수는 요런식으로 저장
    // useEffect(()=>{
    //     //컴포넌트가 는 상태에서 실행됨
    //     console.log('user 값이 입력되었습니다.');
    //     console.log(user);
        
    //     //컴포넌트가 빠지는 상태에서 실행됨
    //     return () => {
    //         console.log('user 값이 제거되는중입니다.');
    //         console.log(user);
    //     };
    // },[user]);

    return(
        <div>
            <b 
            style = {{
                cursor:'pointer', 
                color : user.active ? 'red' : 'black'
                }}
            onClick = {()=> onToggle(user.id)}>
                    {user.username}
                    </b> <span>({user.email})</span>
            <button onClick={()=> onRemove(user.id)}> 삭제 </button>
        </div>
    );
}


// function UserList() {
//     const users = [
//         {
//             id: 1,
//             username: 'kimtaehun',
//             email: 'dev.hoon@gmail.com'
//         },
//         {
//             id: 2,
//             username: 'tester',
//             email: 'tester@example.com'
//         },
//         {
//             id: 3,
//             username: 'liz',
//             email: 'liz@example.com'
//         }
//     ];
//     return(
//         <div>
//             {/* <div>
//             <b>{users[0].username}</b> <span>({users[0].email})</span>
//             </div>

//             <div>
//                 <b>{users[1].username}</b> <span>({users[1].email})</span>
//             </div>
//             <div>
//                 <b>{users[2].username}</b> <span>({users[2].email})</span>
//             </div> */}


//             {/* <User user = {users[0]}/>
//             <User user = {users[1]}/>
//             <User user = {users[2]}/> */}

//             {/* //고였을때 */}
//             {/* {users.map(user => (
//                 <User user = {user}/>
//             ))} */}
            
//             {/* key지정 필요  */}
//             {users.map((user,index) => (
//                 <User user = {user} key={index}/>
//             ))}
//         </div>
//     )
// }

function UserList({users, onRemove, onToggle}) {
    return(
        <div>
            {users.map(user => (
                <User user = {user} key = {user.id} onRemove = {onRemove} onToggle = {onToggle}/>
            ))}
        </div>
    )
}
export default UserList;