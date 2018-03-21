var module = angular.module("ExchangeCalculator", []);
module.controller("MainCtrl", Main);

function Main($scope) {
	$scope.countryList = ["Australia", "Canada", "France", "India", "Mexico", "United Kingdom"];
	//console.log($scope.countryList);
	$scope.sendAmount = null;
	$scope.receiveAmount = null;
	$scope.isDecimalDisabled = false;

	$scope.getExchangeRate = function() {
		switch($scope.selectedCountry) {
			case "Australia":
				$scope.exchangeRate = 1.30;
				$scope.currency = "AUD";
				break;
			case "Canada":
				$scope.exchangeRate = 1.31;
				$scope.currency = "CAD";
				break;
			case "France":
				$scope.exchangeRate = 0.82;
				$scope.currency = "EUR";
				break;
			case "India":
				$scope.exchangeRate = 65.24;
				$scope.currency = "INR";
				break;
			case "Mexico":
				$scope.exchangeRate = 18.76;
				$scope.currency = "MXP";
				break;
			case "United Kingdom":
				$scope.exchangeRate = 0.71;
				$scope.currency = "GBP";
		}
	}

	$scope.getReceiveAmount = function() {
		$scope.receiveAmount = (parseFloat($scope.sendAmount) * parseFloat($scope.exchangeRate));
	}

	$scope.editSendAmount = function(value) {
		if(value == ".") {
			$scope.isDecimalDisabled = true;
		}
		if($scope.sendAmount) {
			$scope.sendAmount = $scope.sendAmount + "" + value;
		} else {
			if($scope.isDecimalDisabled) {
				$scope.sendAmount = "0."
			} else {
				$scope.sendAmount = value + "";
			}
		}
	}

	$scope.clearSendAmount = function() {
		$scope.sendAmount = null;
		$scope.receiveAmount = null;
		$scope.isDecimalDisabled = false;
	}
}