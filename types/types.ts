

export interface Astroid {
  astroid: {
    name: string,
    is_potentially_hazardous_asteroid: string,
    nasa_jpl_url: string,
    id:string,
    name_limited:string,
    neo_reference_id:string,
    designation:string
  }
}

export interface AstroidAction {
  type: string
  payload: Astroid
}