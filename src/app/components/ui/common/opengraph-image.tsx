import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from "next/og";

export type Props = {
	title?: string;
};

export default async function OpengraphImage(
	props?: Props,
): Promise<ImageResponse> {
	const { title } = {
		...{
			title: "change_me",
		},
		...props,
	};

	const logoData = await readFile(join(process.cwd(), 'public', 'icon.png'))
  const logoSrc = Uint8Array.from(logoData).buffer

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center bg-white justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <img alt="logo" src={logoSrc as unknown as string} height="100" />
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
