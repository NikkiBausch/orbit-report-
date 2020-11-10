export class Satellite {
    name: string;
    type: string;
    operational: boolean;
    orbitType: string;
    launchDate: string;
     
    

constructor(name: string, type: string, operational: boolean, orbitType: string, launchDate: string ){

this.name = name, 
this.type = type, 
this.operational = operational,
this.orbitType = orbitType, 
this.launchDate = launchDate; 




    }

shouldShowWarning(): boolean  { 
 
    if(this.type.toLowerCase() === 'space debris'){

        return true; 
    }
        else {
            return false; 
        }


}

//shouldShowWarning returns a boolean and has no parameters
//shouldShowWarning returns true if the satellite type is 'Space Debris'
// it returns false otherwise
//Case-insensitive 


} 
