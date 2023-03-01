import {Controller, Get} from "@nestjs/common";

@Controller("/homePage")
export class AppController {
    @Get("/hi")
    getRootRoute() {
        return "hi there!"
    }

    @Get("/bye")
    getByeThere(){
        return "bye there!"
    }
}

