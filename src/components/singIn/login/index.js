import React from "react";

export default function LoginUser(params) {
    return (
        <div>
            <form>
                <div className="row mb-3" >
                    <div class="input-group flex-nowrap ">
                    <span class="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
                </div>
                
                
                <div class="row mb-3">
                    
                    <div class="col-sm-12">
                        <input type="password" class="form-control" id="inputPassword3" required  placeholder="Password"/>
                    </div>
                </div>


                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                            <label class="form-check-label" for="gridCheck1">
                                Example checkbox
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>

        </div>
    )
}