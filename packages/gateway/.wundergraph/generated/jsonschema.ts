// Code generated by wunderctl. DO NOT EDIT.

// @ts-ignore: no-types available
import type { JSONSchema7 } from "json-schema";

export interface Queries {
	Dragons: {
		input: JSONSchema7;
		response: JSONSchema7;
		operationType: string;
		description: string;
	};
}

export interface Mutations {}

export interface Subscriptions {}

export type Schema = Queries & Mutations & Subscriptions;

const jsonSchema: Schema = {
	Dragons: {
		input: { type: "object", properties: {}, additionalProperties: false },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						spacex_dragons: {
							type: "array",
							items: {
								type: "object",
								properties: {
									name: { type: "string" },
									active: { type: "boolean" },
									thrusters: {
										type: "array",
										items: {
											type: "object",
											properties: { amount: { type: "integer" }, pods: { type: "integer" } },
											additionalProperties: false,
										},
									},
								},
								additionalProperties: false,
							},
						},
					},
					additionalProperties: false,
				},
			},
			additionalProperties: false,
		},
		operationType: "QUERY",
		description: "",
	},
};

export type QueryNames = "Dragons";

export type MutationNames = never;

export type SubscriptionNames = never;

export default jsonSchema;
