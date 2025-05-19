import type { router } from '~/server/routes/router'
import type { RouterClient } from '@orpc/server'
import { createORPCClient } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import { BatchLinkPlugin } from '@orpc/client/plugins'

/**
 * This is part of the Optimize SSR setup.
 *
 * @see {@link https://orpc.unnoq.com/docs/integrations/next#optimize-ssr}
 */
declare global {
  var $client: RouterClient<typeof router> | undefined
}

const link = new RPCLink({
  url: new URL(
    '/api/v1',
    typeof window !== 'undefined'
      ? window.location.href
      : 'http://localhost:3000',
  ),
  plugins: [
    new BatchLinkPlugin({
      groups: [
        {
          condition: () => true,
          context: {},
        },
      ],
    }),
  ],
})

export const client: RouterClient<typeof router> =
  globalThis.$client ?? createORPCClient(link)
