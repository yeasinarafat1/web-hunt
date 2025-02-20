import React from "react";
import { Globe, Clock, ChevronRight } from "lucide-react";

const ShowSearchResult = ({ result }: { result: SearchResult }) => {
  return (
    <div className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 mb-8 group">
      {/* Header with URL and age */}
      <div className="flex items-center text-sm text-gray-500 mb-2">
        {result?.profile?.img && (
          <img
            src={result.profile.img}
            alt={`${result.profile.name} logo`}
            className="w-5 h-5 mr-2 rounded-sm"
          />
        )}
        <a
          href={result.url}
          className="truncate max-w-md hover:text-gray-700 flex items-center"
        >
          <Globe className="w-4 h-4 mr-1 text-gray-400" />
          <span className="truncate">
            {result?.meta_url?.hostname || result?.url}
          </span>
        </a>
        <span className="mx-2 text-gray-300">•</span>
        <span className="flex items-center text-gray-400">
          <Clock className="w-3 h-3 mr-1" />
          <span>{result?.age}</span>
        </span>
      </div>

      {/* Main content */}
      <div>
        <a
          href={result?.url}
          className="text-xl text-blue-700 font-medium hover:underline block mb-2"
        >
          {result?.title}
        </a>

        <p
          className="text-sm text-gray-700 mb-4 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: result?.description }}
        />
      </div>

      {/* Related links/cluster */}
      {result?.cluster && result.cluster.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            Related Pages
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {result.cluster.map((item: ClusterItem, index: number) => (
              <a
                key={index}
                href={item.url}
                className="text-sm text-gray-600 hover:text-blue-600 flex items-center group"
              >
                <ChevronRight className="w-3 h-3 mr-1 text-gray-400 group-hover:text-blue-500" />
                <span className="truncate">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Full URL at bottom */}
      <div className="mt-2">
        <a
          href={result.url}
          className="text-xs text-gray-500 hover:text-gray-700 truncate block"
        >
          {result?.url}
        </a>
      </div>
    </div>
  );
};

export default ShowSearchResult;
