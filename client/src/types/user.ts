export type User = {
    id : string; 
    displayName : string; 
    email : string;
    token : string;
    ImageUrl? : string; 
}
export type LogicCreds = {
    email : string;
    password : String;
}
export type RegisterCreds = {
    email:string ;
    password:string;
    displayName:string;
}