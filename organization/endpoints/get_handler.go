package endpoints

import (
	"encoding/json"
	"net/http"

	"github.com/GDGVIT/Project-Hades/model"
	"github.com/GDGVIT/Project-Hades/organization/endpoints/views"
)

/**
* @api {get} /api/v1/org/join Get organization list
* @apiName Get organization list
* @apiGroup organization
*
* @apiParam {string} org name of the organization as query param
*
*
* @apiParamExample {json} request-example
*
* curl localhost/api/v1/org/search?q=GDG-VIT
*
* @apiParamExample {json} response-example
*
*{
*    "message": "Successful",
*    "data": [
*        {
*            "name": "GDG-VIT",
*            "location": "India",
*            "description": "Developer Student Clubs",
*            "tag": "technical",
*            "createdAt": "2019-08-05 21:49:11.875594638 +0000 UTC m=+30.409044543",
*            "website": "https://dsv-vit-vellore.com"
*        }
*    ]
*}
**/

func getOrgs() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		search := r.URL.Query().Get("org")
		orgs, err := model.GetOrgs(search)
		if err != nil {
			json.NewEncoder(w).Encode(views.Msg{"Some error occurred", err})
			return
		}
		json.NewEncoder(w).Encode(views.Msg{"Successful", orgs})
		return
	}
}

/**
* @api {get} /api/v1/org/view-req View join requests
* @apiName View join requests
* @apiGroup organization
*
* @apiParam {string} org name of the organization as query param
* @apiPermission admin
*
* @apiParamExample {json} request-example
*
* curl localhost/api/v1/org/view-req?q=GDG-VIT -H '{"Authorization":"asdbasbdbasjdbasjhbdhasd"}'
*
* @apiParamExample {json} response-example
*
*{
*    "message": "Successful",
*    "data": [
*        {
*            "firstName": "test",
*            "lastName": "test",
*            "password": "",
*            "email": "test1@test.com",
*            "phoneNumber": "",
*            "linkedIn": "test",
*            "facebook": "test",
*            "description": "test",
*            "createdAt": "20-01-01"
*        },
*        {
*            "firstName": "test",
*            "lastName": "test",
*            "password": "",
*            "email": "test1@test.com",
*            "phoneNumber": "",
*            "linkedIn": "test",
*            "facebook": "test",
*            "description": "test",
*            "createdAt": "20-01-01"
*        },
*        {
*            "firstName": "test",
*            "lastName": "test",
*            "password": "",
*            "email": "test1@test.com",
*            "phoneNumber": "",
*            "linkedIn": "test",
*            "facebook": "test",
*            "description": "test",
*            "createdAt": "20-01-01"
*        }
*    ]
*}
**/

func getJoinRequest() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		token := r.Header.Get("Authorization")
		tk, err := model.ValidateToken(token)
		if err != nil {
			json.NewEncoder(w).Encode(views.Msg{"Some error occurred", err.Error()})
			return
		}
		org := r.URL.Query().Get("org")
		if !model.Enforce(tk.Email, org, "admin") {
			json.NewEncoder(w).Encode(views.Msg{"Error: User does not have sufficient permission", nil})
			return
		}

		data, err := model.GetJoinRequests(org)
		if err != nil {
			json.NewEncoder(w).Encode(views.Msg{"Some error occurred", err})
			return
		}

		json.NewEncoder(w).Encode(views.Msg{
			Message: "Successful",
			Data:    data,
		})
		return
	}
}

/**
* @api {get} /api/v1/org/land Get events and organizations
* @apiName Get events and organizations
* @apiGroup organization
*
* @apiParam {string} org name of the organization as query param
* @apiPermission user
*
* @apiParamExample {json} response-example
*
*{
*    "message": "Successful",
*    "data": {
*        "events": null,
*        "organizations": [
*            {
*                "name": "CodeChef-VIT",
*                "location": "India",
*                "description": "Developer Student Clubs",
*                "tag": "technical",
*                "createdAt": "2019-08-05 23:12:14.963858896 +0000 UTC m=+14.778325532",
*                "website": ""
*            }
*        ]
*    }
*}
**/

func GetEventsAndOrgs() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		token := r.Header.Get("Authorization")
		tk, err := model.ValidateToken(token)
		if err != nil {
			json.NewEncoder(w).Encode(views.Msg{"Some error occurred", err.Error()})
			return
		}
		events, orgs, err := model.GetUserDetails(tk.Email)
		if err != nil {
			json.NewEncoder(w).Encode(views.Msg{"Some error occurred", err})
			return
		}

		json.NewEncoder(w).Encode(views.Msg{"Successful", map[string]interface{}{
			"organizations": orgs,
			"events":        events,
		}})
		return
	}
}