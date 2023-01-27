export type TUser={
    id:string
    name:string
    phone: string;
    password: string;
    role:TRole
    page:TPage
}
export type TRole={
    id:string
    name:string  
}
export type TPage={
    id:string
    name:string  
    
}