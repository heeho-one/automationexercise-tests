import { APIRequestContext, expect } from "@playwright/test";
import { APIRoutes } from "../routes/api.routes";

export class APIUtils {
  constructor(private request: APIRequestContext) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async registerAccount(requestBody: FormData): Promise<any> {
    const res = await this.request.post(APIRoutes.registerUser, {
      multipart: requestBody,
    });

    expect(await res.json()).toEqual(
      expect.objectContaining({
        message: "User created!",
        responseCode: 201,
      }),
    );
  }
}
