// src/lib/utils/metadata.js
import * as mm from "music-metadata";

/**
 * 读取音频文件的元数据
 * @param {string} filePath - 文件完整路径
 * @returns {Promise<Object>} - 包含 title, artist, album, cover 等
 */
export async function readAudioMetadata(filePath) {
  try {
    // 通过 Tauri 的 fs 插件读取文件
    const { readFile } = await import("@tauri-apps/plugin-fs");
    const fileData = await readFile(filePath);

    // 解析元数据
    const metadata = await mm.parseBlob(new Blob([fileData]));

    const { common, picture } = metadata;
    let cover = null;

    // 处理封面图片
    if (picture && picture.length > 0) {
      const img = picture[0];
      const blob = new Blob([img.data], { type: img.format });
      cover = URL.createObjectURL(blob);
    }

    return {
      title: common.title || null,
      artist: common.artist || null,
      album: common.album || null,
      year: common.year || null,
      genre: common.genre?.[0] || null,
      cover: cover,
    };
  } catch (err) {
    console.warn("读取元数据失败:", filePath, err);
    return {
      title: null,
      artist: null,
      album: null,
      year: null,
      genre: null,
      cover: null,
    };
  }
}