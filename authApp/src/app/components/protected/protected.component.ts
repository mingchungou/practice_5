
import {Component, OnInit} from "@angular/core";

//Loading services
import {AuthService} from "../../services/auth.service";

@Component({
    selector: "app-protected",
    templateUrl: "./protected.component.html"
})
export class ProtectedComponent implements OnInit {
    private profile: object;

    constructor(private authService: AuthService) {

    };

    ngOnInit() {
        if (this.authService.userProfile) {
            this.profile = this.authService.userProfile;
        } else {
            this.authService.getProfile((err, profile) => {
                this.profile = profile;
            });
        }
    };
};
