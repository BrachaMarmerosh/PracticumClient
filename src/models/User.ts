export default class User {
    constructor(
        public Id:number,
        public FirstName:string,
        public LastName:string,
        public Gender:string,
        public HMO:string,
        public TZ:string,
        public BornDate:Date,
        public FamilyCode:number,
        public StatusUser:string,
        public SpouseOrParentTZ:string
        ){}
}