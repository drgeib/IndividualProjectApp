namespace IndividualProjectApp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor(movieService: IndividualProjectApp.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }
    class DialogController {
        public ok() {
            this.$uibModalInstance.close();
        }

        constructor(public food, private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance) {

        }




    }


    export class AboutController {

        public showDialog(food) {
            this.$uibModal.open({
                controller: DialogController,
                controllerAs: 'dialog',
                templateUrl: '/ngApp/views/dialog.html',
                resolve: {
                    food: function () {
                        return food;

                    }
                }
            });
        }
        constructor(private $uibModal: ng.ui.bootstrap.IModalService) { }

    }
}
