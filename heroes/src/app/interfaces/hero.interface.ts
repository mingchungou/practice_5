
export interface Hero {
    name:string,
    from:string,
    intro:string,
    key$?:string //Adding "?" can tell interface that this attribute is optional.
};
