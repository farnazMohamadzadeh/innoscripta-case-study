
export abstract class NewsSource {
  protected abstract getNewsData(filters: NewsFilter): Promise<News[] | undefined>;

  async initNewsList(filters: NewsFilter): Promise<News[] | undefined> {
    try {
      const result = await this.getNewsData(filters);
      return result;

    } catch (e) {
      return Promise.reject(e);
    }
  }
}