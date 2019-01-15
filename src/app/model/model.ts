export interface User{
    id?:number;
    username:string;
    password:string;
    role?:string;
    status?:string;
    first_name?: string;
    last_name?: string;
}

export interface Report{
    title:string;
    description:string;
    user_id?: number;
    report_time?: string;
    location: string;
    img_name?:string;
}