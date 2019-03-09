define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "_home_angad_go_src_github_com_GDGVIT_Project_Hades_docs_main_js",
    "groupTitle": "_home_angad_go_src_github_com_GDGVIT_Project_Hades_docs_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/v1/coupons/create-schema",
    "title": "create coupon schema",
    "name": "create_coupon_schema",
    "group": "coupons",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event",
            "description": "<p>name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the coupon</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the coupon</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "day",
            "description": "<p>day of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "\n{\n\t\"event\":\"DEVRELCONF\",\n\t\"coupons\": [{\n\t\t\"name\":\"lunch\",\n\t\t\"description\":\"lunch\",\n\t\t\"day\":1\n\t},{\n\t\t\"name\":\"bf\",\n\t\t\"description\":\"bf\",\n\t\t\"day\":1\n\t},{\n\t\t\"name\":\"lunch\",\n\t\t\"description\":\"lunch\",\n\t\t\"day\":2\n\t},{\n\t\t\"name\":\"dinner\",\n\t\t\"description\":\"dinner\",\n\t\t\"day\":2\n\t}]\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": \"Successfully creted coupon schema for event DEVRELCONF\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./coupons/pkg/service/service.go",
    "groupTitle": "coupons"
  },
  {
    "type": "post",
    "url": "/api/v1/coupons/mark-present",
    "title": "mark attendee present",
    "name": "mark_attendee_present",
    "group": "coupons",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventName",
            "description": "<p>name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the attendee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "day",
            "description": "<p>day of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"attendance\":{\n\t\t\"eventName\":\"DEVRELCONF\",\n\t\t\"email\":\"a@a.COM\",\n\t\t\"day\":2\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": \"Successfully marked present for the day\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./coupons/pkg/service/service.go",
    "groupTitle": "coupons"
  },
  {
    "type": "post",
    "url": "/api/v1/coupons/redeem-coupon",
    "title": "redeem a coupon",
    "name": "redeem_a_coupon",
    "group": "coupons",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventName",
            "description": "<p>name of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the attendee</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "day",
            "description": "<p>day of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "couponName",
            "description": "<p>name of the coupon</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"attendance\": {\n\t\t\"couponName\":\"dinner\",\n\t\t\"day\":2,\n\t\t\"email\":\"a@a.COM\",\n\t\t\"eventName\":\"DEVRELCONF\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": \"No match found for this coupon\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./coupons/pkg/service/service.go",
    "groupTitle": "coupons"
  },
  {
    "type": "post",
    "url": "/api/v1/event/create-event",
    "title": "create a new event",
    "name": "create_a_new_event",
    "group": "events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://localhost:8800/"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clubName",
            "description": "<p>Name of your club</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of your event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "toDate",
            "description": "<p>ending date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fromDate",
            "description": "<p>start date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "toTime",
            "description": "<p>start time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fromTime",
            "description": "<p>ending time</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "budget",
            "description": "<p>budget</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>event description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>category of the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "venue",
            "description": "<p>event venue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attendance",
            "description": "<p>Name of your club</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expectedParticipants",
            "description": "<p>Expected Participants in the event</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "facultyCoordinator",
            "description": "<p>faculty coordinator details (Participant Object)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "studentCoordinator",
            "description": "<p>student coordinator details (Participant Object)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PROrequest",
            "description": "<p>PRO department requests</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "campusEngineerRequest",
            "description": "<p>Campus engineer requests</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>duration of event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "\n{\"event\":{\n \"clubName\":\"GDG\",\n \"name\":\"DEVRELCONF\",\n \"toDate\":\"10TH OCTOBER\",\n \"fromDate\":\"8TH OCTOBER\",\n \"toTime\":\"10 PM\",\n \"fromTime\":\"11 AM\",\n \"budget\":\"200000\",\n \"description\":\"TECHNICAL EVENT AT GDG VIT. ITS GONNA BE AMAZING\",\n \"category\":\"TECHNICAL\",\n \"venue\":\"ANNA AUDI\",\n \"attendance\":\"4000\",\n \"expectedParticipants\":\"4000\",\n \"facultyCoordinator\":{\n    \"name\":\"NOORU MAA\",\n    \"registrationNumber\":\"17BBE1010\",\n    \"email\":\"SDADAS@A.COM\",\n    \"phoneNumber\":\"919191991911\",\n    \"gender\":\"M\",\n    \"eventsAttended\":\"ALL\"\n },\n \"studentCoordinator\":{\n    \"name\":\"NOOR\",\n    \"registrationNumber\":\"17BBE1010\",\n    \"email\":\"SDADAS@A.COM\",\n    \"phoneNumber\":\"919191991911\",\n    \"gender\":\"M\",\n    \"eventsAttended\":\"ALL\"\n },\n \"PROrequest\":\"SAJDOOSIJANDFSAKFDSAFD\",\n \"campusEngineerRequest\":\"SDFHBSADUB, ASNFD , AS KDFSAM FDSA, AS, SD\",\n \"duration\":\"16 hours\"\n}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n\trs:\"created\",\n\terr:null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./events/pkg/service/service.go",
    "groupTitle": "events"
  },
  {
    "type": "delete",
    "url": "/api/v1/event/delete-event",
    "title": "delete an event",
    "name": "delete_an_event",
    "group": "events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"clubName\",\n\t\t\"value\":\"GDG\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n\t rs:\"deleted\",\n\t err:null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./events/pkg/service/service.go",
    "groupTitle": "events"
  },
  {
    "type": "get",
    "url": "/api/v1/event/read-event",
    "title": "read an event",
    "name": "read_an_event",
    "group": "events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "specific",
            "description": "<p>search by name of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "   {\"query\":{\n\t\t\"key\":\"clubName\",\n\t\t\"value\":\"GDG\",\n\t\t\"specific\":\"DEVFEST 2019\"\n\t}}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": [{\n       \"clubName\": \"GDG\",\n       \"name\": \"DEVRELCONF\",\n       \"toDate\": \"10TH OCTOBER\",\n       \"fromDate\": \"8TH OCTOBER\",\n       \"toTime\": \"10 PM\",\n       \"fromTime\": \"11 AM\",\n       \"budget\": \"200000\",\n       \"description\": \"TECHNICAL EVENT AT GDG VIT. ITS GONNA BE AMAZING\",\n       \"category\": \"TECHNICAL\",\n       \"venue\": \"ANNA AUDI\",\n       \"attendance\": \"4000\",\n       \"expectedParticipants\": \"4000\",\n       \"facultyCoordinator\": {\n           \"name\": \"NOORU MAA\",\n           \"registrationNumber\": \"17BBE1010\",\n           \"email\": \"SDADAS@A.COM\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\"\n       },\n       \"studentCoordinator\": {\n           \"name\": \"NOORU BAAP\",\n           \"registrationNumber\": \"17BBE1010\",\n           \"email\": \"SDADAS@A.COM\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\"\n       },\n       \"PROrequest\": \"SAJDOOSIJANDFSAKFDSAFD\",\n       \"campusEngineerRequest\": \"SDFHBSADUB, ASNFD , AS KDFSAM FDSA, AS, SD\",\n       \"duration\": \"16 hours\",\n       \"mainSponsor\": {\n           \"name\": \"\",\n           \"registrationNumber\": \"\",\n           \"email\": \"\",\n           \"phoneNumber\": \"\",\n           \"gender\": \"\"\n       },\n       \"status\": \"false\"\n\n   }],\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./events/pkg/service/service.go",
    "groupTitle": "events"
  },
  {
    "type": "put",
    "url": "/api/v1/event/update-event",
    "title": "update an event",
    "name": "update_an_event",
    "group": "events",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changeKey",
            "description": "<p>key of the value which needs to be altered</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changeValue",
            "description": "<p>the new value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"clubName\",\n\t\t\"value\":\"GDG\",\n\t\t\"changeKey\":\"clubName\",\n\t\t\"changeValue\":\"codechef\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n\trs:\"updated\",\n\terr:null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./events/pkg/service/service.go",
    "groupTitle": "events"
  },
  {
    "type": "get",
    "url": "/api/v1/exporter/excel",
    "title": "export participants as excel/csv",
    "name": "export_participants_as_excel_csv",
    "group": "exporter",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>event name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specific",
            "description": "<p>types of participants to export i.e. present/absent/all</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example1",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\",\n\t\t\"specific\":\"project-all\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "request-example2",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\",\n\t\t\"specific\":\"project-present\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "request-example3",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\",\n\t\t\"specific\":\"project-absent\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exporter/endpoints/controller/handlerfuncs.go",
    "groupTitle": "exporter"
  },
  {
    "type": "get",
    "url": "/api/v1/exporter/json",
    "title": "export participants as json",
    "name": "export_participants_as_json",
    "group": "exporter",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>event name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specific",
            "description": "<p>types of participants to export i.e. present/absent/all</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example1",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\",\n\t\t\"specific\":\"project-all\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "request-example2",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\",\n\t\t\"specific\":\"project-present\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "request-example3",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\",\n\t\t\"specific\":\"project-absent\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exporter/endpoints/controller/handlerfuncs.go",
    "groupTitle": "exporter"
  },
  {
    "type": "post",
    "url": "/api/v1/participants/create-attendee",
    "title": "create an attendee",
    "name": "create_an_attendee",
    "group": "participants",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrationNumber",
            "description": "<p>registration number of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phoneNumber of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the participant</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventName",
            "description": "<p>name of the event registering for</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"details\":{\n     \"name\":\"angad sharma\",\n     \"registrationNumber\":\"17BBE1010\",\n     \"email\":\"SDADAS@A.COM\",\n     \"phoneNumber\":\"919191991911\",\n     \"gender\":\"M\",\n     \"eventsAttended\":\"ALL\",\n     \"eventName\":\"DEVSOC\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": \"created\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./participants/pkg/service/service.go",
    "groupTitle": "participants"
  },
  {
    "type": "delete",
    "url": "/api/v1/participants/delete-attendee",
    "title": "delete an attendee",
    "name": "delete_an_attendee",
    "group": "participants",
    "permission": [
      {
        "name": "super-admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the attendee by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"name\",\n\t\t\"Value\":\"dhruv sharma\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": \"deleted\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./participants/pkg/service/service.go",
    "groupTitle": "participants"
  },
  {
    "type": "get",
    "url": "/api/v1/participants/read-attendee",
    "title": "read an attendee",
    "name": "read_an_attendee",
    "permission": [
      {
        "name": "super-admin"
      }
    ],
    "group": "participants",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the attendee by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"name\",\n\t\t\"Value\":\"angad sharma\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": [\n       {\n           \"name\": \"angad sharma\",\n           \"registrationNumber\": \"17BBE1010\",\n           \"email\": \"SDADAS@A.COM\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\",\n\t\t\t \"attended\":\"absent\"\n       }\n   ],\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./participants/pkg/service/service.go",
    "groupTitle": "participants"
  },
  {
    "type": "delete",
    "url": "/api/v1/participants/rm-attendee",
    "title": "remove attendee from an event",
    "name": "remove_attendee_from_an_event",
    "group": "participants",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key to query the attendee by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changeKey",
            "description": "<p>Name of the club</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changeValue",
            "description": "<p>Name of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"query\":{\n\t\t\"key\":\"name\",\n\t\t\"Value\":\"dhruv sharma\",\n\t\t\"changeKey\":\"DSC VIT\",\n\t\t\"changeValue\":\"DEVFEST 2019\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "\n{\n   \"rs\": \"updated\",\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./participants/pkg/service/service.go",
    "groupTitle": "participants"
  },
  {
    "type": "get",
    "url": "/api/v1/simple-projection/project-absent",
    "title": "show absent participants",
    "name": "show_absent_participants",
    "group": "simple_projection",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>event name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>day of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"day\":2,\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": [\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@axd.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"F\"\n       }\n   ],\n   \"err\": null\n}\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./simple_projection/pkg/service/service.go",
    "groupTitle": "simple_projection"
  },
  {
    "type": "get",
    "url": "/api/v1/simple-projection/project-all",
    "title": "show participants of an event",
    "name": "show_participants_of_an_event",
    "group": "simple_projection",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>event name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": [\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@axd.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"F\"\n       }\n   ],\n   \"err\": null\n}",
          "type": "json"
        },
        {
          "title": "request-example-all",
          "content": "{\n\t\"event\":\"DEVFEST 2019\"\n}",
          "type": "json"
        },
        {
          "title": "response-example-all",
          "content": "{\n   \"rs\": [\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@axd.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"F\"\n       },\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@ax.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\"\n       },\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@x.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\"\n       }\n   ],\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./simple_projection/pkg/service/service.go",
    "groupTitle": "simple_projection"
  },
  {
    "type": "get",
    "url": "/api/v1/simple-projection/project-present",
    "title": "show present participants",
    "name": "show_present_participants",
    "group": "simple_projection",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>key to query the event by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "value",
            "description": "<p>value of the key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "event",
            "description": "<p>event name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "day",
            "description": "<p>day of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"day\":2,\n\t\"query\":{\n\t\t\"key\":\"gender\",\n\t\t\"value\":\"F\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"rs\": [\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@axd.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"F\"\n       }\n   ],\n   \"err\": null\n}",
          "type": "json"
        },
        {
          "title": "request-example-all",
          "content": "{\n\t\"event\":\"DEVFEST 2019\",\n\t\"day\":2\n}",
          "type": "json"
        },
        {
          "title": "response-example-all",
          "content": "{\n   \"rs\": [\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@axd.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"F\"\n       },\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@ax.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\"\n       },\n       {\n           \"name\": \"das\",\n           \"registrationNumber\": \"17BCE2009\",\n           \"email\": \"x@x.com\",\n           \"phoneNumber\": \"919191991911\",\n           \"gender\": \"M\"\n       }\n   ],\n   \"err\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./simple_projection/pkg/service/service.go",
    "groupTitle": "simple_projection"
  }
] });
