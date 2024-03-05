export const useCart = () => useState(() => []);
export const useAuth=()=>useState(()=>({
    isAuthenticated:false,
}));

export const useDetails = () => useState(()=>[
    {name : "tarun", email:"tarungarigipati@gmail.com", password:"12345"},
    {name : "varun",email:"satya@gmail.com",password:"142445243"},
    {name : "premsai", email:"premasai@gmail.com", password:"@password"},
    {name : "varun",email:"satya@gmail.com",password:"@password"},
    {name : "premsai", email:"premasai@gmail.com", password:"@password"},
    {name : "varun",email:"satya@gmail.com",password:"@password"},
])